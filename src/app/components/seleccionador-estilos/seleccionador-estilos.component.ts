import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-seleccionador-estilos',
  templateUrl: './seleccionador-estilos.component.html',
  styleUrls: ['./seleccionador-estilos.component.css']
})
export class SeleccionadorEstilosComponent implements OnInit {

  constructor(private servicio: ServicioService) { }

  ngOnInit(): void {
    
  }

  cambiarEstilo(){
    this.servicio.cambiarEstilo();
  }

}
