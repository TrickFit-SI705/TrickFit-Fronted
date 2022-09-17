import { Component, OnInit } from '@angular/core';
import { Alimento } from 'src/app/model/alimento';
import { AlimentoService } from 'src/app/service/alimento.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-alimento-listar',
  templateUrl: './alimento-listar.component.html',
  styleUrls: ['./alimento-listar.component.css'],
})
export class AlimentoListarComponent implements OnInit {
  lista: Alimento[] = [];
  dataSource: MatTableDataSource<Alimento> = new MatTableDataSource();
  displayedColumns: string[]=['id','nombre','kcal'];
  constructor(private pService: AlimentoService) {}

  ngOnInit(): void {
    this.pService.listar().subscribe((data) => {
      this.dataSource=new MatTableDataSource(data);
    });
  }
}
