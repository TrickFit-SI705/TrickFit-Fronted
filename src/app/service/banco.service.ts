import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Banco } from '../model/banco';

@Injectable({
  providedIn: 'root'
})
export class BancoService {
  private url7: string = `${environment.host7}`;
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Banco[]>(this.url7);
  }
}
