import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ejercicio } from '../model/ejercicio';

@Injectable({
  providedIn: 'root'
})
export class EjercicioService {
  private url5: string = `${environment.host5}`;
  constructor(private http: HttpClient) { }
  listar(){
    return this.http.get<Ejercicio[]>(this.url5);
  }
}
