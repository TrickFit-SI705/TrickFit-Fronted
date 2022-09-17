import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Alimento } from '../model/alimento';

@Injectable({
  providedIn: 'root',
})
export class AlimentoService {
  private url: string = `${environment.host}`;
  constructor(private http:HttpClient) {}
  listar(){
    return this.http.get<Alimento[]>(this.url);
  }
}
