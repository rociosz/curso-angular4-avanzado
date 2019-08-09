import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  public titulo;
  public nombreDelAlmacen: string;
  public miAlmacen;

  constructor() { 
    this.titulo = 'Esta es la Tienda de Útiles Escolares';
  }

  ngOnInit() {
  }

  mostrarNombre(){
  	console.log(this.nombreDelAlmacen);
  }

  verDatosAlmacen(event){
  	console.log(event);
    this.miAlmacen = event;
  }
  
}
