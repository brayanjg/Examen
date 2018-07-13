import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from "../home/home.component";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-modelo-papa',
  templateUrl: './modelo-papa.component.html',
  styleUrls: ['./modelo-papa.component.css']
})
export class ModeloPapaComponent implements OnInit {
  busqueda
  busquedaLibros
  busquedaCompras
  mensaje=" "
  listaComp
  public movimiento;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient

  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        const _id = params['id'].toString();
        this.movimiento= _id

      });
    this.buscarAutorLibro()
    this.buscarLibro()
    this.carritoCompras()
    this.getCodigoCompra()
  }

  mostrarId(){
    console.log(this.movimiento)
  }

  buscarAutorLibro(){

    this.http.get(`http://localhost:1337/autor?id=${this.movimiento}`)
      .subscribe(
        (dataAut:any[]) => {
          console.log(dataAut)
          this.busqueda = dataAut
          console.log(this.busqueda)
        }

      )

  }
  buscarLibro(){

    this.http.get(`http://localhost:1337/libro?autorId=${this.movimiento}`)
      .subscribe(
        (dataAut:any[]) => {
          console.log(dataAut)
          this.busquedaLibros = dataAut
          if(this.busquedaLibros.length==0){
            this.mensaje= "No existen registros"
          }
          else{
            if(this.busquedaLibros.length>8){
              document.getElementById("botonCargarMas").hidden = false
            }
          }
        }

      )

  }
  getCodigoCompra(){

    this.http.get(`http://localhost:1337/listacompra`)
      .subscribe(
        (dataAut:any[]) => {
          console.log(dataAut)
          this.listaComp = dataAut
        }

      )
  }
  carritoCompras(){
    this.http.get(`http://localhost:1337/listacompra`)
      .subscribe(
        (dataAut:any[]) => {
          this.http.get(`http://localhost:1337/compras?idCompra=${dataAut.length}`)
            .subscribe(
              (dataAut:any[]) => {
                console.log(dataAut)
                this.busquedaCompras = dataAut
              }

            )
        }

      )

  }


}




