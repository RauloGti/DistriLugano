import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Firestore, collection, addDoc, collectionData, doc, getDoc,getFirestore ,deleteDoc} from '@angular/fire/firestore'

@Component({
  selector: 'app-crear-repartidor',
  templateUrl: './crear-repartidor.page.html',
  styleUrls: ['./crear-repartidor.page.scss'],
})
export class CrearRepartidorPage implements OnInit {
  form: FormGroup = new FormGroup({});
  
  inputNombre: string = '';
  inputApellido: string = '';
  inputDni: string = '';
  inputTelefono: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private firestore :Firestore
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      dni: ['', Validators.required],
      telefono: ['', Validators.required],
    });
  }

  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Advertencia',
      message: mensaje,
      buttons: ['Aceptar'],
    });

    await alert.present();
  }

  creardatos() {
    if (
      this.inputNombre.trim() === '' ||
      this.inputApellido.trim() === '' ||
      this.inputDni.trim() === '' ||
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
        telefono: this.inputTelefono,
        
      };
  
      const collectionCrear = collection(this.firestore, "IdRepartido");
      addDoc(collectionCrear, objetoAgregar)
        .then(() => {
          console.log("Se ha agregado el documento correctamente");
          
        })
        .catch((err) => {
          console.error("Error al agregar el documento:", err);
        });
        this.limpiarCampos();
    }

  limpiarCampos() {
    this.form.reset();
    this.inputNombre = '';
    this.inputApellido = '';
    this.inputDni = '';
    this.inputTelefono = '';
  }
}
