import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Plan } from '../model/plan';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  private url3: string = `${environment.host3}`;
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Plan[]>(this.url3);
  }
}
