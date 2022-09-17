import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AlimentoComponent } from './page/alimento/alimento.component';
import { AlimentoListarComponent } from './page/alimento/alimento-listar/alimento-listar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule} from '@angular/material/table';
import { UsuarioComponent } from './page/usuario/usuario.component';
import { UsuarioListarComponent } from './page/usuario/usuario-listar/usuario-listar.component';
import { PreguntaComponent } from './page/pregunta/pregunta.component';
import { PreguntaListarComponent } from './page/pregunta/pregunta-listar/pregunta-listar.component';
import { PlanComponent } from './page/plan/plan.component';
import { PlanListarComponent } from './page/plan/plan-listar/plan-listar.component';
import { RecetaComponent } from './page/receta/receta.component';
import { RecetaListarComponent } from './page/receta/receta-listar/receta-listar.component';
import { EjercicioComponent } from './page/ejercicio/ejercicio.component';
import { EjercicioListarComponent } from './page/ejercicio/ejercicio-listar/ejercicio-listar.component';
import { RegistroalimenticioComponent } from './page/registroalimenticio/registroalimenticio.component';
import { RegistroalimenticioListarComponent } from './page/registroalimenticio/registroalimenticio-listar/registroalimenticio-listar.component';
import { BancoComponent } from './page/banco/banco.component';
import { BancoListarComponent } from './page/banco/banco-listar/banco-listar.component';
import { CitaComponent } from './page/cita/cita.component';
import { CitaListarComponent } from './page/cita/cita-listar/cita-listar.component';
import { SuscripcionComponent } from './page/suscripcion/suscripcion.component';
import { SuscripcionListarComponent } from './page/suscripcion/suscripcion-listar/suscripcion-listar.component';

@NgModule({
  declarations: [
    AppComponent,
    AlimentoComponent,
    AlimentoListarComponent,
    UsuarioComponent,
    UsuarioListarComponent,
    PreguntaComponent,
    PreguntaListarComponent,
    PlanComponent,
    PlanListarComponent,
    RecetaComponent,
    RecetaListarComponent,
    EjercicioComponent,
    EjercicioListarComponent,
    RegistroalimenticioComponent,
    RegistroalimenticioListarComponent,
    BancoComponent,
    BancoListarComponent,
    CitaComponent,
    CitaListarComponent,
    SuscripcionComponent,
    SuscripcionListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
