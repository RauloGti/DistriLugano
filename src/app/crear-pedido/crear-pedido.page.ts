import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Firestore, collection, getDocs, getFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-crear-pedido',
  templateUrl: './crear-pedido.page.html',
  styleUrls: ['./crear-pedido.page.scss'],
})
export class CrearPedidoPage implements OnInit {
  form: FormGroup = new FormGroup({});
  productos: any[] = [];
  clientes: any[] = [];
  repartidores: any[] = [];
  datos:any;
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

  async obtenerProductos() {
    try {
      const db = getFirestore();
      const collectionRef = collection(db, 'IdProductos');
      const querySnapshot = await getDocs(collectionRef);
      this.productos = [];
      querySnapshot.forEach((doc) => {
        const producto = {
          id: doc.id,
          
          // Otros campos del producto
          // ...
        };
        this.productos.push(producto);
      });
    } catch (error) {
      console.log('Error al obtener los productos:', error);
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
}