import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },

  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },

  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  
  {
    path: 'crear-pedido',
    loadChildren: () => import('./crear-pedido/crear-pedido.module').then( m => m.CrearPedidoPageModule)
  },
  {
    path: 'crear-repartidor',
    loadChildren: () => import('./crear-repartidor/crear-repartidor.module').then( m => m.CrearRepartidorPageModule)
  },
  {
    path: 'crear-cliente',
    loadChildren: () => import('./crear-cliente/crear-cliente.module').then( m => m.CrearClientePageModule)
  },
  {
    path: 'crear-producto',
    loadChildren: () => import('./crear-producto/crear-producto.module').then( m => m.CrearProductoPageModule)
  },
  {
    path: 'detalle-producto/:id',
    loadChildren: () => import('./detalle-producto/detalle-producto.module').then( m => m.DetalleProductoPageModule)
  },  {
    path: 'contacto',
    loadChildren: () => import('./contacto/contacto.module').then( m => m.ContactoPageModule)
  }

  
    


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
