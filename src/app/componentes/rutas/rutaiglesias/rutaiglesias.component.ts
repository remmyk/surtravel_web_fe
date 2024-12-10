import { Component, OnInit } from '@angular/core';
import L, { Routing } from 'leaflet';
import 'leaflet-routing-machine';
import { CabeceraComponent } from "../../parciales/cabecera/cabecera.component";
import { PieComponent } from "../../parciales/pie/pie.component";


@Component({
  selector: 'app-rutaiglesias',
  standalone: true,
  imports: [CabeceraComponent, PieComponent],
  templateUrl: './rutaiglesias.component.html',
  styleUrl: './rutaiglesias.component.scss'
})
export class RutaiglesiasComponent implements OnInit{

  mapa : any;

  constructor(){};

  ngOnInit(): void {

    this.mostrarMapa();
  }


  //
  mostrarMapa(){
    this.mapa = L.map('map', {
      center: [-19.048197, -65.260233],
      zoom: 10
  });

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.mapa);

  let icono = L.icon({iconUrl : 'assets/iconos/icono_iglesia.svg', iconSize : [40, 40]});
  L.marker([-19.048197, -65.260233], {icon : icono}).addTo(this.mapa);
  L.marker([-19.046415, -65.260904], {icon : icono}).addTo(this.mapa);


  L.Routing.control({
    waypoints: [
       L.latLng(-19.048197, -65.260233),
       L.latLng(-19.046415, -65.260904)
    ]
   
    // routeWhileDragging: true
}).addTo(this.mapa);

}
}
