import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.page.html',
  styleUrls: ['./crear-producto.page.scss'],
})
export class CrearProductoPage implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private firestore: Firestore,
    private alertController: AlertController
  ) {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      marca: ['', Validators.required],
      cantidad: [0, [Validators.required, Validators.pattern('^[0-9]+$')]],
      peso: ['', Validators.required],
      precio: [0, [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
  }

  ngOnInit() {}

  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Advertencia',
      message: mensaje,
      buttons: ['Aceptar'],
    });

    await alert.present();
  }

  creardatos() {
    if (this.form.invalid) {
      this.mostrarAlerta('Por favor completa todos los campos');
      return;
    }

    const cantidad = this.form.get('cantidad')?.value;
    const precio = this.form.get('precio')?.value;

    if (isNaN(Number(precio))) {
      this.mostrarAlerta('El campo precio debe ser un número');
      return;
    }

    if (isNaN(Number(cantidad))) {
      this.mostrarAlerta('El campo cantidad debe ser un número');
      return;
    }

    const objetoAgregar: any = {
      nombre: this.form.get('nombre')?.value,
      marca: this.form.get('marca')?.value,
      peso: this.form.get('peso')?.value,
      cantidad: cantidad,
      precio: precio,
    };

    const collectionCrear = collection(this.firestore, 'IdProductos');
    addDoc(collectionCrear, objetoAgregar)
      .then(() => {
        console.log('Se ha agregado el documento correctamente');
      })
      .catch((err) => {
        console.error('Error al agregar el documento:', err);
      });
      this.limpiarCampos();
  }

  limpiarCampos() {
    this.form.reset();
  }
}
