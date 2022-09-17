import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Receta } from '../model/receta';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {
  private url4: string = `${environment.host4}`;
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Receta[]>(this.url4);
  }
}
