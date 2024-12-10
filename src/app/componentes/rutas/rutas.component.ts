import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rutas',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './rutas.component.html',
  styleUrl: './rutas.component.scss'
})
export class RutasComponent {




  mostrarFotoPrincipal(objeto: number) {

    const titulo1 = ['Visita nuestras Iglesias', 'Visita nuestros Museos']
    const ruta = document.getElementById("ruta");
    const titulo = document.getElementById("tituloRuta");
    if (ruta != null && titulo != null) {
      const url = '../../../assets/rutas/'+objeto+'.jpg';
      ruta.style.background = 'url(' + url + ')';
      ruta.style.backgroundSize = 'cover';
      titulo.innerHTML = titulo1[objeto-1];
    }
  }
}
