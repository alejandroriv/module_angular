import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPrestamoComponent } from './form-prestamo/form-prestamo.component';
import { ListaPrestamoComponent } from './lista-prestamo/lista-prestamo.component';
import { FormRegistroDocComponent } from './form-registro-doc/form-registro-doc.component';

@NgModule({
  declarations: [FormPrestamoComponent, ListaPrestamoComponent, FormRegistroDocComponent],
  imports: [
    CommonModule
  ]
})
export class DocumentModule { }
