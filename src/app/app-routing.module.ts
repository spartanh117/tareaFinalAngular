import { AotCompiler } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { ContonedorComponent } from "./components/contonedor/contonedor.component";
import { FormularioLoginComponent } from './components/formulario-login/formulario-login.component';

const routes: Routes = [
  {path: '',redirectTo:'/login', pathMatch: 'full'},
  {path:'login', component: FormularioLoginComponent},
  {path: 'blog', component: ContonedorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
