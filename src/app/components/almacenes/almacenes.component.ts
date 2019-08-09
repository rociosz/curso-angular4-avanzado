import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'almacenes',
  templateUrl: './almacenes.component.html'
})
export class AlmacenesComponent implements OnInit {
  @Input() nombre: string;
  @Input('cantidades_cuadrados') cantidad:  number;
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
