import { Component, OnInit } from '@angular/core';
import { Ejercicio } from 'src/app/model/ejercicio';
import { EjercicioService } from 'src/app/service/ejercicio.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ejercicio-listar',
  templateUrl: './ejercicio-listar.component.html',
  styleUrls: ['./ejercicio-listar.component.css']
})
export class EjercicioListarComponent implements OnInit {
  lista: Ejercicio[] = [];
  dataSource: MatTableDataSource<Ejercicio> = new MatTableDataSource();
  displayedColumns: string[]=['id','titulo','descrip'];
  constructor(private pService: EjercicioService) { }

  ngOnInit(): void {
    this.pService.listar().subscribe((data) => {
      this.dataSource=new MatTableDataSource(data);
    });
  }

}
