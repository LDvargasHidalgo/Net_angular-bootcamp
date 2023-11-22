import { Component, Input, OnInit } from '@angular/core';
import { ICliente } from '../interfaces/cliente';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent  {

  //Listado es un componente hijo
 //@Input()


 constructor(private ClientesService: ClientesService){ }

  get clientico(): ICliente[]{
    return this.ClientesService.clientes;
  };

  //En el constructor del componente, se inyecta una instancia del servicio
 /*  ClientesService. Luego, en el método clientes, se utiliza el getter para
   acceder a la lista de clientes del servicio. Esto permite al componente
   obtener la lista de clientes y utilizarla en la plantilla del componente para
    mostrar la información en el DOM. */

}
