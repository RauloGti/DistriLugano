import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {  ReactiveFormsModule } from '@angular/forms';

import { CrearRepartidorPageRoutingModule } from './crear-repartidor-routing.module';

import { CrearRepartidorPage } from './crear-repartidor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule, // Agrega ReactiveFormsModule

    CrearRepartidorPageRoutingModule
  ],
  declarations: [CrearRepartidorPage]
})
export class CrearRepartidorPageModule {}
