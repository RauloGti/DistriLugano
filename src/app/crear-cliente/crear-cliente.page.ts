import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Firestore, collection, addDoc, collectionData, doc, getDoc,getFirestore ,deleteDoc} from '@angular/fire/firestore'
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.page.html',
  styleUrls: ['./crear-cliente.page.scss'],
})
export class CrearClientePage implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,private firestore :Firestore,private alertController: AlertController) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      dni: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required]
    });
  }
  collection: any[] |  undefined;

  inputNombre:string='';
  inputApellido:string='';
  inputDni:string='';

  inputDireccion:string='';
  inputTelefono:string='';

  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Advertencia',
      message: mensaje,
      buttons: ['Aceptar']
    });
  
    await alert.present();
  }

  creardatos() {
    if (
      this.inputNombre.trim() === '' ||
      this.inputApellido.trim() === '' ||
      this.inputDni.trim() === '' ||
      
      this.inputDireccion.trim() === '' ||
      this.inputTelefono.trim() === ''
      
    ) {
      this.mostrarAlerta('Por favor completa todos los campos');
      return;
    }
  
    if (isNaN(Number(this.inputDni))) {
      this.mostrarAlerta('El campo DNI debe ser un número');
      return;
    }
  
    
  
    
  
    if (isNaN(Number(this.inputTelefono))) {
      this.mostrarAlerta('El campo Teléfono debe ser un número');
      return;
    }
  
      const objetoAgregar: any = {
        nombre: this.inputNombre,
        apellido: this.inputApellido,
        dni: this.inputDni,
        
        correo: this.inputDireccion,
        telefono: this.inputTelefono,
        
      };
  
      const collectionCrear = collection(this.firestore, "IdClientes");
      addDoc(collectionCrear, objetoAgregar)
        .then(() => {
          console.log("Se ha agregado el documento correctamente");
          
        })
        .catch((err) => {
          console.error("Error al agregar el documento:", err);
        });
    }

    limpiarCampos() {
      this.inputNombre = '';
      this.inputApellido = '';
      this.inputDni = '';
      
      this.inputDireccion = '';
      this.inputTelefono = '';
    }
}
