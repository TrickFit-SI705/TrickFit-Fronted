import { Component, OnInit } from '@angular/core';
import { Plan } from 'src/app/model/plan';
import { PlanService } from 'src/app/service/plan.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-plan-listar',
  templateUrl: './plan-listar.component.html',
  styleUrls: ['./plan-listar.component.css']
})
export class PlanListarComponent implements OnInit {
  lista: Plan[] = [];
  dataSource: MatTableDataSource<Plan> = new MatTableDataSource();
  displayedColumns: string[]=['id','nombre','detalle','tiempo','precio'];
  constructor(private pService:PlanService) { }

  ngOnInit(): void {
    this.pService.listar().subscribe(data => {
      this.dataSource=new MatTableDataSource(data);
    });
  }

}
