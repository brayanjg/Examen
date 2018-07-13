import {RouterModule, Routes} from "@angular/router";
import {Component} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {ModeloHijoComponent} from "./modelo-hijo/modelo-hijo.component";
import {ModeloPapaComponent} from "./modelo-papa/modelo-papa.component";
import {CarritoComponent} from "./carrito/carrito.component";

const app_routes: Routes =[
  {path: 'Home', component: HomeComponent },
  {path: 'ModeloPapa/:id',
    component: ModeloPapaComponent},
  {path: 'ModeloPapa/:id/ModeloHijo/:idL',
    component: ModeloHijoComponent},
  {path: 'Carrito', component: CarritoComponent },
  {path: '**', pathMatch: 'full', redirectTo:'Home'}
];

export const app_routing = RouterModule.forRoot(app_routes);
