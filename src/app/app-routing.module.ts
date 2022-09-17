import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlimentoComponent } from './page/alimento/alimento.component';
import { BancoComponent } from './page/banco/banco.component';
import { CitaComponent } from './page/cita/cita.component';
import { EjercicioComponent } from './page/ejercicio/ejercicio.component';
import { PlanComponent } from './page/plan/plan.component';
import { PreguntaComponent } from './page/pregunta/pregunta.component';
import { RecetaComponent } from './page/receta/receta.component';
import { RegistroalimenticioComponent } from './page/registroalimenticio/registroalimenticio.component';
import { SuscripcionComponent } from './page/suscripcion/suscripcion.component';
import { UsuarioComponent } from './page/usuario/usuario.component';

const routes: Routes = [
  {
    path: '',
    component: AlimentoComponent
  },
  {
    path: 'usuario',
    component: UsuarioComponent
  },
  {
    path: 'pregunta',
    component: PreguntaComponent
  },
  {
    path: 'plan',
    component: PlanComponent
  },
  {
    path: 'receta',
    component: RecetaComponent
  },
  {
    path: 'ejercicio',
    component: EjercicioComponent
  },
  {
    path: 'banco',
    component: BancoComponent
  },
  {
    path: 'cita',
    component: CitaComponent
  },
  {
    path: 'suscripcion',
    component: SuscripcionComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
