import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
//formulario Reactivo, para utilizar los datos login.import {formBuilder , validator} 
export class LoginPage implements OnInit {

  form = this.formBuilder.group({
    email: ['',[Validators.email, Validators.required]],
    password: ['',[Validators.required]],
  })

  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit() {
  }

  login(){
    if(this.form.valid){
      const {email, password} = this.form.getRawValue();
      console.log(email, password);
    } else {
      this.form.markAllAsTouched();
    }
  }


}
