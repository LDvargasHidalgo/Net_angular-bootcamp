import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from './interfaces/reqres';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl:string = environment.apiUrl;
  //userUrl:string = `${this.baseUrl}/users`;

  resultados:Usuario[] = [];

  constructor(private http:HttpClient) { }

  listarUsuarios(){
    
    }
}
