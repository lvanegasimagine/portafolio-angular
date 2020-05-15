import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  constructor(private http: HttpClient) {
    console.log('Servicio de InfoPagina Cargada');
    this.cargarInfo();
  }

  private cargarInfo(){
    // Leer los archivos JSON
    this.http.get('assets/data/data-pagina.json')
        .subscribe((resp: InfoPagina) => {
          this.cargada = true;
          this.info = resp;
        });
  }
}
