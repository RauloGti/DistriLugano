import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {  ReactiveFormsModule } from '@angular/forms';

import { CrearPedidoPageRoutingModule } from './crear-pedido-routing.module';

import { CrearPedidoPage } from './crear-pedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearPedidoPageRoutingModule,
    ReactiveFormsModule // Agrega ReactiveFormsModule

  ],
  declarations: [CrearPedidoPage]
})
export class CrearPedidoPageModule {}
