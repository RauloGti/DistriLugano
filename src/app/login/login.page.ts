import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';

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
    private formBuilder : FormBuilder,
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }
 login() {
    if (this.form.valid) {
      const { email, password } = this.form.getRawValue();
      if (email && password) { // Verificar si email y password no son null
        this.auth.login(email, password)
          .then(() => {
            this.router.navigate(['/home']);
          })
          .catch((error: any) => {
            console.error(error);
          });
      }

    } else {
      this.form.markAllAsTouched();
    }
  }



}
