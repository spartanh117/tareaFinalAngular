import { Injectable } from '@angular/core';
import { Entrada } from "../clases/entrada";

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  entradas: Entrada[];
  flag: Boolean;
  copia: Entrada[];
  constructor() { 
    this.entradas = [
      new Entrada("Dia De cuarentena",new Date("2020-06-17"),"hoy es un un dia de cuarentena ..."),
      new Entrada("hola mundo",new Date("2020-07-05"),"Brilla el sol, Brilla la luna"),
      new Entrada("Una entrada mas",new Date("2020-07-05"),"45")
    ];
    this.flag = true;
    this.copia = this.entradas.slice();
  }

  getEntradas(){
    return this.copia;
  }

  addEntradas(entrada){
    this.entradas.unshift(entrada);
    this.copia.unshift(entrada);
  }

  removeEntrada(entrada){
    let index = this.entradas.indexOf(entrada);
     
      if(index > -1){
        this.entradas.splice(index,1);
        this.copia.splice(index,1);
      }
      else  console.log(index);
  }

  cambiarEstilo(){
    this.flag = !this.flag;
  }

  getEstilo(){
    return this.flag;
  }
}
