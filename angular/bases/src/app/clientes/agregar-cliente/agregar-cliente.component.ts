import { Component, EventEmitter, Output } from '@angular/core';
import { ICliente } from '../interfaces/cliente';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html'
})
export class AgregarClienteComponent {
  constructor(private ClientesService: ClientesService){ }


  nuevo: ICliente = {
    nombre: '',
    credito: null,
  };

  agregar() {
    /*  console.log(this.nuevo); */
    if (this.nuevo.nombre.trim().length === 0) {
      console.log("El campo nombre no puede estar vacio");

      //verifica que se ingrese algun valor
      return; // cuando entra a esta condicion y recibe el return sale del metodo
    }
    if (this.nuevo.credito === null) {
      console.log("El valor del credito no puede ser nulo");

      return;
    }

    //this.onNuevoCliente.emit(this.nuevo);//solo emite los valores
    this.ClientesService.agregarCliente(this.nuevo);
    this.nuevo = {
      nombre: '',
      credito: null,
    };
  }
}
