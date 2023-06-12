import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { filter } from 'rxjs/operators'
import { state } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Mensajes', url: '/folder/inbox', icon: 'mail' },
    { title: 'Realizar un pedido', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Ver mis Pedidos', url: '/folder/favorites', icon: 'heart' },
    { title: 'Pedidos Archivados', url: '/folder/archived', icon: 'archive' },
    { title: 'Eliminar pedidos', url: '/folder/trash', icon: 'trash' },
    { title: 'informacion', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Productos', 'Agregar Productos', 'Modificar productos', 'Eliminar Productos', 'Proveedores', 'Set Provedores'];
  //se utilizo user$ para guardar el estado de sesion y utilizar ese estado en el html del sidemenu app.component.html para ver usuario ingresado
  user$ = this.auth.authState$.pipe(
    filter(state=>state ? true : false)
  );

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}
  
  //funcion que cierra sesion"importando servicio" y devuelve a el usuario a la pagina de login.
  async logout(){
    await this.auth.logout();
   this.router.navigate(['/login']);
 }

}
