import { Component } from '@angular/core';
import { CabeceraComponent } from "../parciales/cabecera/cabecera.component";
import { PieComponent } from "../parciales/pie/pie.component";

@Component({
  selector: 'app-itemcategoria',
  standalone: true,
  imports: [CabeceraComponent, PieComponent],
  templateUrl: './itemcategoria.component.html',
  styleUrl: './itemcategoria.component.scss'
})
export class ItemcategoriaComponent {

}
