import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'almacenes',
  templateUrl: './almacenes.component.html'
})
export class AlmacenesComponent implements OnInit {
  public nombre: string;
  public cantidad:  number;
  public longitud: string;
  public abierto: boolean;

  constructor() {
    this.nombre = 'Almacén para Útiles Escolares';
  	this.cantidad = 15;
  	this.longitud = 'Alta';
  	this.abierto = false;
   }

  ngOnInit() {
  }

}
