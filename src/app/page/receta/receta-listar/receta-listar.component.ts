import { Component, OnInit } from '@angular/core';
import { Receta } from 'src/app/model/receta';
import { RecetaService } from 'src/app/service/receta.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-receta-listar',
  templateUrl: './receta-listar.component.html',
  styleUrls: ['./receta-listar.component.css']
})
export class RecetaListarComponent implements OnInit {
  lista: Receta[] = [];
  dataSource: MatTableDataSource<Receta> = new MatTableDataSource();
  displayedColumns: string[]=['id','titulo','descrip'];
  constructor(private pService: RecetaService) { }

  ngOnInit(): void {
    this.pService.listar().subscribe(data => {
      this.dataSource=new MatTableDataSource(data);
    });
  }

}
