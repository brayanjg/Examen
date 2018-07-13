import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {AppComponent} from "../app.component";
import {CarritoComponent} from "../carrito/carrito.component";




@Component({
  selector: 'app-modelo-hijo',
  templateUrl: './modelo-hijo.component.html',
  styleUrls: ['./modelo-hijo.component.css']
})
export class ModeloHijoComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<string>()
  public idLibro;
  public idAutor;
  busqueda
  busquedaLibros
  busquedaCompras
  numeroItem
  listaComp


  constructor(
    private route: ActivatedRoute,
    private http: HttpClient

  ) { }

  ngOnInit() {

    this.route.params
      .subscribe(params => {
        const _idL = params['idL'].toString();
        this.idLibro= _idL
        const _idA = params['id'].toString();
        this.idAutor= _idA

      });
    this.buscarAutorLibro()
    this.buscarLibro()
    this.carritoCompras()
    this.getCodigoCompra()

  }


  buscarAutorLibro(){

    this.http.get(`http://localhost:1337/autor?id=${this.idAutor}`)
      .subscribe(
        (dataAut:any[]) => {
          console.log(dataAut)
          this.busqueda = dataAut
        }

      )

  }
  buscarLibro(){

    this.http.get(`http://localhost:1337/libro?id=${this.idLibro}`)
      .subscribe(
        (dataAut:any[]) => {
          console.log(dataAut)
          this.busquedaLibros = dataAut
        }

      )

  }
  comprar(){
    this.carritoCompras()
    this.http.post(`http://localhost:1337/compras`,{"createdAt": 1531424650631,
      "updatedAt": 1531424650631,
      "id": this.numeroItem,
      "idItem": `${this.busquedaLibros[0].id}`,
      "idCompra": `${this.listaComp.length}`

    }).subscribe(
      (data:any) => {
        console.log(data)
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
  borrarCompras(){
   this.http.delete(`http://localhost:1337/compras?id=1`)
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
