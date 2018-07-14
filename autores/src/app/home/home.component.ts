import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";
import {HttpClient} from "@angular/common/http";
import {st} from "@angular/core/src/render3";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  buscar: string
  busqueda
   mensajeA = " "
  mensajeL = " "
  flag: boolean
  resultadosAut
  resultadosLib
  busquedaCompras
  listaComp
  idCompra=0
  librosParaMostrar=[]
  push=0
  constructor(private http: HttpClient)
  {
    }

  ngOnInit() {

    this.carritoCompras()
  }
getAutor (){
    this.http.get(`http://localhost:1337/autor`).subscribe((data:any [])=>{console.log(data)})

}
  onNameKeyUp(event:any){

    this.buscar = event.target.value;

  }

  buscarAutorLibro(){

    this.http.get(`http://localhost:1337/autor?id=${this.buscar}`)
  .subscribe(
      (dataAut:any[]) => {
        console.log(dataAut)
        this.busqueda = dataAut
        if (this.busqueda.length==0){
          this.mensajeA = "No existen registros"
          this.resultadosAut = this.busqueda
        }
        else {
          this.mensajeA = " "
          this.resultadosAut = this.busqueda

        }
      }

    )

  }
  buscarLibro(){

    this.http.get(`http://localhost:1337/libro?autorId=${this.buscar}`)
      .subscribe(
        (dataLib:any[]) => {
          console.log(dataLib)
          this.busqueda = dataLib
          if (this.busqueda.length==0){
            this.mensajeL = "No existen registros"
            this.resultadosLib = this.busqueda
          }
          else {
            this.mensajeL = " "
            this.resultadosLib = this.busqueda

            this.paginator()}



        }

      )

  }
  mostrarBoton(target){
    if(target="autor"){
      if(this.resultadosAut.length>6){
        document.getElementById("botonAutor").hidden= false
      }
    }
    else{
      if(this.resultadosLib.length>8){
        document.getElementById("botonLibro").hidden= false
      }
    }
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
                this.busquedaCompras = dataAut

              }

            )
        }

      )

  }
  masLibros(){
    this.librosParaMostrar=[]
    for (let i=(8*(this.push+1));i<(this.resultadosLib.length-8*this.push);i++){
      this.librosParaMostrar.push(this.resultadosLib[i])
    }
    if(this.librosParaMostrar.length<8){
      document.getElementById("botonLibro").hidden = true
    }
    this.push = this.push+1
  }
  paginator(){
    if(this.resultadosLib.length<8){
      document.getElementById('botonLibro').hidden = true
      for (let i =0;i<this.resultadosLib.length;i++){
        //console.log(i)
        this.librosParaMostrar.push(this.resultadosLib[i])
      }
    }
    else{
      document.getElementById('botonLibro').hidden = false
    for (let i =0;i<8;i++){
      //console.log(i)
      this.librosParaMostrar.push(this.resultadosLib[i])
    }
    console.log('El resultado es:')
    console.log(this.librosParaMostrar)}
  }

  vaciar(){
    this.librosParaMostrar=[]
  }
}

