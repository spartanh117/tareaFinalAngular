import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private servicio: ServicioService,private route: Router ){}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      user: new FormControl ('', [Validators.required]),
      password: new FormControl ('', [Validators.required, Validators.minLength(8)])
    
    });
  }

  login(){
    this.route.navigate(['/blog']);
  }
}
