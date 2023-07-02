import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Firestore, collection, getDocs, getFirestore ,getDoc,doc} from '@angular/fire/firestore';

import * as pdfMake from "pdfmake/build/pdfmake";

import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-crear-pedido',
  templateUrl: './crear-pedido.page.html',
  styleUrls: ['./crear-pedido.page.scss'],
})
export class CrearPedidoPage implements OnInit {
  form: FormGroup = new FormGroup({});
  productos: any = [];
  clientes: any[] = [];
  repartidores: any[] = [];
  datos:any;

  products :any

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private firestore: Firestore
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      productos: [[], Validators.required],
      cliente: ['', Validators.required],
      repartidor: ['', Validators.required],
      // Otros campos del formulario
      // ...
    });

    this.obtenerProductos();
    this.obtenerClientes();
    this.obtenerRepartidores();
  }

  async obtenerProductos(){
    const db = getFirestore();
    const docRef = doc(db, "Productos", "IdProductos");
    const docSnap = await getDoc(docRef);
    docSnap.data();
    try {
      const docSnap = await getDoc(docRef);
      let datos : any = docSnap.data()
      this.products = datos.productos
    } 
    catch(error) {
      console.log(error)
    }
  }

  async obtenerClientes() {
    try {
      const db = getFirestore();
      const collectionRef = collection(db, 'IdClientes');
      const querySnapshot = await getDocs(collectionRef);
      this.clientes = [];
      querySnapshot.forEach((doc) => {
        const cliente = {
          id: doc.id,
          
          // Otros campos del cliente
          // ...
        };
        this.clientes.push(cliente);
      });
    } catch (error) {
      console.log('Error al obtener los clientes:', error);
    }
  }

  async obtenerRepartidores() {
    try {
      const db = getFirestore();
      const collectionRef = collection(db, 'IdRepartido');
      const querySnapshot = await getDocs(collectionRef);
      this.repartidores = [];
      querySnapshot.forEach((doc) => {
        const repartidor = {
          id: doc.id,
          
          
          // Otros campos del repartidor
          // ...
        };
        this.repartidores.push(repartidor);
      });
    } catch (error) {
      console.log('Error al obtener los repartidores:', error);
    }
  }

  // Resto del código de la página
  // ...
  

  agregarProducto1(){
    this.pedido1 = this.pedido1 +1
  }

  restarProducto1(){
    this.pedido1 = this.pedido1 -1
    if(this.pedido1==-1){
      this.agregarProducto1()
    }
  }

  agregarProducto2(){
    this.pedido2 = this.pedido2 +1
  }

  restarProducto2(){
    this.pedido2 = this.pedido2 -1
    if(this.pedido2==-1){
      this.agregarProducto2()
    }
  }

  agregarProducto3(){
  this.pedido3 = this.pedido3 +1
  }
  
  restarProducto3(){
    this.pedido3 = this.pedido3 -1
    if(this.pedido3==-1){
      this.agregarProducto3()
    }
  }


  agregarProducto4(){
    this.pedido4 = this.pedido4 +1
  }
  
  restarProducto4(){
    this.pedido4 = this.pedido4 -1
    if(this.pedido4==-1){
      this.agregarProducto4()
    }
  }

  agregarProducto5(){
  this.pedido5 = this.pedido5 +1
  }
  
  restarProducto5(){
    this.pedido5 = this.pedido5 -1
    if(this.pedido5==-1){
      this.agregarProducto5()
    }
  }

  agregarProducto6(){
  this.pedido6 = this.pedido6 +1
  }

  restarProducto6(){
    this.pedido6 = this.pedido1 -6
    if(this.pedido6==-1){
      this.agregarProducto6()
    }
  }

  guardarProductos(){
    let listaProductos :any

    listaProductos = [
      {
        id:0,
        producto : "Clásicas 100gr",
        cantidad :this.products[0].cantidad - this.pedido1
      },
      {
        id:1,
        producto : "Clásicas 150gr",
        cantidad :this.products[1].cantidad - this.pedido2
      },
      {
        id:2,
        producto : "Clásicas 475gr",
        cantidad :this.products[2].cantidad - this.pedido3
      },
      {
        id:3,
        producto : "Onduladas 100gr",
        cantidad :this.products[3].cantidad - this.pedido4
      },
      {
        id:4,
        producto : "Onduladas 180gr",
        cantidad :this.products[4].cantidad - this.pedido5
      },
      {
        id:5,
        producto : "Onduladas 475gr",
        cantidad :this.products[5].cantidad - this.pedido6
      }
    ]
    
    this.downloadStock(listaProductos)

  }

  formatPdfProductos(products: any){
    var printProductsList:any=[]
    products.forEach((lista: {
      producto: any;
      cantidad: any; 
    }) => {
      printProductsList.push({
        table: {
          body: [
            [
              'Producto',
              'Stock',
            ],
            [
              lista.producto,
              lista.cantidad,
            ],
          ]
        }
        , margin: [ 0, 0, 0, 20 ]
      });
      
    });
    return printProductsList;   
  }



  downloadStock( lista: any){
    let date = new Date();
    let documentFormat = {content: [
      {
        text:`Lista de pedidos DistriLugano ${ date.toLocaleString() } `
        , margin: [ 0, 0, 0, 20 ]
      },
      this.formatPdfProductos(lista)
    ]};
    pdfMake.createPdf(documentFormat).download(`Stock-${ date.toLocaleString() +'.pdf' }`)
  }


 pedido1 :any = 0
 pedido2 :any = 0
 pedido3 :any = 0
 pedido4 :any = 0
 pedido5 :any = 0
 pedido6 :any = 0


  cantidad(id :any){
   
  }
}