import { Routes } from '@angular/router';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { RutaiglesiasComponent } from './componentes/rutas/rutaiglesias/rutaiglesias.component';
import { ItemcategoriaComponent } from './componentes/itemcategoria/itemcategoria.component';

export const routes: Routes = [
    { path : "itemcategoria", component : ItemcategoriaComponent},
    { path : "rutaiglesias", component : RutaiglesiasComponent},
    { path : "principal", component : PrincipalComponent},
    { path : "", redirectTo : "/principal", pathMatch : "full"}
];
