import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';

import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';

import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(
    public router: Router,
    private auth: Auth,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  validateField = false

  emailRegister: string = '';

  passwordRegister: string ="";

  registerUser() {
    createUserWithEmailAndPassword(this.auth, this.emailRegister, this.passwordRegister)
    .then(() => {
      this.router.navigate(['/login']);
    })
    .catch((err) => {
      this.presentAlert(err)
    });
  }

  async presentAlert(err :string) {

    let errorFirebase="Firebase: Password should be at least 6 characters (auth/weak-password)"

    let errors = err != errorFirebase ? "El correo ya esta registrado" : ""

    const alert = await this.alertController.create({
      message: errors,   
    });
    await alert.present();
  }

}
