import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './views/listado/listado.component';
import { AcercaDeNosotrosComponent } from './views/acerca-de-nosotros/acerca-de-nosotros.component';
import { PaginaNoEncontradaComponent } from './views/pagina-no-encontrada/pagina-no-encontrada.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  {path: 'login' , component:LoginComponent},
  { path: 'listado', component: ListadoComponent },
  { path: 'nosotros', component: AcercaDeNosotrosComponent },

  { path: '', redirectTo: '/listado', pathMatch: 'full' },
  {path:'**' , component: PaginaNoEncontradaComponent}
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
