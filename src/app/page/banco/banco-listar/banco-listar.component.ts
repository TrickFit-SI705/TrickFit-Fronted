import { Component, OnInit } from '@angular/core';
import { Banco } from 'src/app/model/banco';
import { BancoService } from 'src/app/service/banco.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-banco-listar',
  templateUrl: './banco-listar.component.html',
  styleUrls: ['./banco-listar.component.css']
})
export class BancoListarComponent implements OnInit {
  lista: Banco[] = [];
  dataSource: MatTableDataSource<Banco> = new MatTableDataSource();
  displayedColumns: string[]=['id','nombre'];
  constructor(private pService: BancoService) { }

  ngOnInit(): void {
    this.pService.listar().subscribe(data => {
      this.dataSource=new MatTableDataSource(data);
    });
  }

}
