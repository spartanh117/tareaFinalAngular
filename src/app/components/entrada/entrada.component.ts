import { Component, Input, OnInit } from '@angular/core';
import { Entrada } from 'src/app/clases/entrada';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {

  @Input ('entrada') data: Entrada;

  constructor(private servicio: ServicioService) { }

  ngOnInit(): void {
  
  }

  borrarEntrada(){
    this.servicio.removeEntrada(this.data);
  }

}
