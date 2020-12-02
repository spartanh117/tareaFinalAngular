import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/clases/entrada';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-lista-entradas',
  templateUrl: './lista-entradas.component.html',
  styleUrls: ['./lista-entradas.component.css']
})
export class ListaEntradasComponent implements OnInit {
  entradas: Entrada[];
  constructor(private servico: ServicioService) {
    this.entradas = servico.getEntradas();
   }

  ngOnInit(): void {
  }

}
