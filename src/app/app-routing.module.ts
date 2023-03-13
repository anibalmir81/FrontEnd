import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { EditSkillsComponent } from './components/hys/edit-skills.component';
import { NewSkillComponent } from './components/hys/new-skill.component';
import { LoginComponent } from './components/login/login.component';
import { EditProyectosComponent } from './components/proyectos/edit-proyectos.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';
import { EditAcercadeComponent } from './components/acerca-de/edit-acercade.component';

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'login', component: LoginComponent},
  { path:'nuevaexp', component: NewExperienciaComponent},
  { path:'editexp/:id', component: EditExperienciaComponent},
  { path:'nuevaedu', component: NewEducacionComponent},
  { path:'editedu/:id', component: EditEducacionComponent},
  { path:'nuevoproy', component: NewProyectoComponent},
  { path:'editproy/:id', component: EditProyectosComponent},
  { path:'nuevaskill', component: NewSkillComponent},
  { path:'editskill/:id', component: EditSkillsComponent},
  { path:'editacercade/:id', component:EditAcercadeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
