import { Injectable } from '@angular/core';
import { ICliente } from './interfaces/cliente';

//permite que pueda inyectar en cualquier componente
@Injectable({
  providedIn: 'root'
})
export class ClientesService {
// el guion bajo(_)se utiliza para definir las clases que son privadas
 private _clientes: ICliente[] = [];

  //metodo get para poder acceder a la lista que esta privada
  get clientes(): ICliente[]{
    return this._clientes
  }

  agregarCliente(cliente: ICliente){
    this._clientes.push(cliente);
    localStorage.setItem('clientes',JSON.stringify(this._clientes));
  }

  constructor() {
    console.log("servicio inicializado");
    this._clientes = JSON.parse(localStorage.getItem('clientes')!) ||[];

  }
}

//Los servicios manipulan los datos y después lo podemos
//inyectar en los componentes
//se puede transmitir información de un componente a otro con @input y @output
//pero cuando quiero utiizar data lo hacemos por medio del servicio
//local storage,persistencia de datos(solo guarda  string)
//JSON.stringify, como lo que estamos mandando es un objeto utilizamos un stringfy para que simule que es texto
