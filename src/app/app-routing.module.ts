import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ListaComponent } from './components/lista/lista.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cadastro'},
  { path: 'cadastro', component: CadastroComponent},
  { path: 'listar', component: ListaComponent},
];

@ NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
