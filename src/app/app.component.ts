import { Component } from '@angular/core';
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
  constructor() {}
}
