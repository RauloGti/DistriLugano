import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

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
