import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Entrada } from 'src/app/clases/entrada';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-formulario-annadir',
  templateUrl: './formulario-annadir.component.html',
  styleUrls: ['./formulario-annadir.component.css']
})
export class FormularioAnnadirComponent implements OnInit {

  addForm: FormGroup;

  constructor(private servicio:ServicioService) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      titulo: new FormControl ('', [Validators.required]),
      contenido: new FormControl ('', [Validators.required])
    });
  }

  crearEntrada(){
    this.servicio.addEntradas(new Entrada(this.addForm.controls.titulo.value,new Date(),this.addForm.controls.contenido.value))
  }

}
