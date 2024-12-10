import { Component } from '@angular/core';
import L, { Routing } from 'leaflet';
import 'leaflet-routing-machine';

import { CabeceraComponent } from '../parciales/cabecera/cabecera.component';
import { PieComponent } from '../parciales/pie/pie.component';
import { CategoriasComponent } from '../categorias/categorias.component';
import { CarrouselComponent } from "../carrousel/carrousel.component";
import { Galeria1Component } from "../galeria1/galeria1.component";
import { RutasComponent } from "../rutas/rutas.component";




@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [
    CabeceraComponent,
    PieComponent,
    CategoriasComponent,
    CarrouselComponent,
    Galeria1Component,
    RutasComponent
],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {

  mapa : any;

  constructor(){};

  ngOnInit(): void {

    this.mostrarMapa();
  }


  //
  mostrarMapa(){
    this.mapa = L.map('map', {
      center: [-19.048197, -65.260233],
      zoom: 18
  });

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.mapa);

  let icono = L.icon({iconUrl : 'assets/iconos/icono_iglesia.svg', iconSize : [40, 40]});
  L.marker([-19.048197, -65.260233], {icon : icono}).addTo(this.mapa);

};
}
