import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './cliente/listar/listar.component';
import { EditarComponent } from './cliente/editar/editar.component';
import { AdicionarComponent } from './cliente/adicionar/adicionar.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: "cliente/listar",
    pathMatch: 'full'
  },
  {
    path: 'cliente/listar',
    component: ListarComponent
  },
  {
    path: 'cliente/editar/:id',
    component: EditarComponent
  },
  {
    path: 'cliente/adicionar',
    component: AdicionarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
