import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Caso } from '../models/Caso';
import { Observable } from 'rxjs/index';
@Injectable({
  providedIn: 'root'
})
export class AfectadoService {
  // Coneccion al servidor de NODE, DONDE TENEMOS LA BASE DE DATOS
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getCasos() {
    return this.http.get(`${this.API_URI}/casos`);
  }
  getCaso(id: string) {
    return this.http.get(`${this.API_URI}/casos/$ {id} `);
  }

  // //////-------------------------------------------------///
  // Contribuyentes de otras tablas

}
