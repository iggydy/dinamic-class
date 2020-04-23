import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { USUARIOS_ROUTES } from './components/usuario/usuario.routes';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'usuario/:id', component: UsuarioComponent, children: USUARIOS_ROUTES },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
