import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {  ReactiveFormsModule } from '@angular/forms';
import { CrearClientePageRoutingModule } from './crear-cliente-routing.module';

import { CrearClientePage } from './crear-cliente.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule, // Agrega ReactiveFormsModule
    CrearClientePageRoutingModule
  ],
  declarations: [CrearClientePage]
})
export class CrearClientePageModule {}
