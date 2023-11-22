import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { UsuarioService } from './usuario.service';



@NgModule({
  declarations: [
    ListadoUsuariosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListadoUsuariosComponent
  ],
  providers: [
    UsuarioService
  ]
})
export class UsuariosModule { }
