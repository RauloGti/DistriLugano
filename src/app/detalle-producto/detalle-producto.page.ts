import { Component, OnInit } from '@angular/core';

import { Firestore, doc, getDoc,getFirestore ,updateDoc } from '@angular/fire/firestore'
import { Router } from '@angular/router';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage implements OnInit {

  constructor(
    public router:Router,
    private route: ActivatedRoute,

  ) { }

  routeParams: any 

  ngOnInit() {
    this.routeParams = this.route.snapshot.params['id']
    this.getCollection() 
  }

  productDetail : any

  productDetailId : any

  async getCollection(){
    const db = getFirestore();
    const docRef = doc(db, "Productos", "IdProductos");
    const docSnap = await getDoc(docRef);
    docSnap.data();
    try {
      const docSnap = await getDoc(docRef);
      let datos : any = docSnap.data()
      this.productDetail = datos.productos
      let productInfo= this.productDetail.filter((data: { id: any }) => data.id == this.routeParams);
      this.productDetailId = productInfo[0]
    } 
    catch(error) {
      console.log(error)
    }
  }

}
