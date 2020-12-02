import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeleccionadorEstilosComponent } from './components/seleccionador-estilos/seleccionador-estilos.component';
import { FormularioLoginComponent } from './components/formulario-login/formulario-login.component';
import { FormularioAnnadirComponent } from './components/formulario-annadir/formulario-annadir.component';
import { ListaEntradasComponent } from './components/lista-entradas/lista-entradas.component';
import { ContonedorComponent } from './components/contonedor/contonedor.component';
import { EntradaComponent } from './components/entrada/entrada.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SeleccionadorEstilosComponent,
    FormularioLoginComponent,
    FormularioAnnadirComponent,
    ListaEntradasComponent,
    ContonedorComponent,
    EntradaComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
