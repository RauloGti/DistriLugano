import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
  }

  validateField = false

  emailRegister: string = '';

  passwordRegister: string ="";

  //Estas funciones permiten validar si el formato es valido

   validate(){
    if(this.emailRegister){
       this.validateEmail(this.emailRegister) ? this.validateField = false :this.validateField = true
    }
  }

   validateEmail (inputUser: any)  {
    return inputUser.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }

  registerUser() {
    this.router.navigate(['/menu']);
  }

}
