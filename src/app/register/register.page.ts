import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  form = this.formBuilder.group({
    email: ['',[Validators.email, Validators.required]],
    password: ['',[Validators.required]],
    confirmPassword:  ['',[Validators.required]],
  })

  constructor(
    private formBuilder : FormBuilder,
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  register() {
      if (this.form.valid) {
        const { email, password, confirmPassword } = this.form.getRawValue();
        if (email && password) { // Verificar si email y password no son null
          if (password !== confirmPassword){
            console.error("Las contraseñas no son iguales");
          } else {
          this.auth.register(email, password)
            .then(() => {
              this.router.navigate(['/home']);
            })
            .catch(error => {
              console.error(error);
            });
        }
      } else {
        this.form.markAllAsTouched();
      }
    }
    }
  

}
