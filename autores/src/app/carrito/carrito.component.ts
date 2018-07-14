import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from "@angular/common/http";
import {forEach} from "@angular/router/src/utils/collection";
import {element} from "protractor";
import {importExpr} from "@angular/compiler/src/output/output_ast";
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})

export class CarritoComponent implements OnInit {
  numeroItem
  nombres = 'Brayan Andres'
  apellidos = 'Jimenez'
  cedula = '1720178191'
  direccion = 'Quitumbe'
  usuario = 'bjimenez03'
  ubicacion = 'Ecuador'
  email = 'braa@gmail.com'
  animal: string;
  name: string;
  busquedaCompras
  auxi=''
  busquedaLibroAgre: string[]
  closeResult: string;
  listaComp
  todosLibros
  arregloLibros = [

  ];
  constructor( private modalService: NgbModal,     private http: HttpClient) { }

  ngOnInit() {
    this.carritoCompras()
    this.getCodigoCompra()
    this.buscarLibro()
    this.metodo()

  }
  open(content) {
    this.modalService.open(content, {}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
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
  getCodigoCompra(){

    this.http.get(`http://localhost:1337/listacompra`)
      .subscribe(
        (dataAut:any[]) => {
          console.log(dataAut)
          this.listaComp = dataAut
        }

      )
  }



  buscarLibro(){
    this.http.get(`http://localhost:1337/libro`)
      .subscribe(
        (dataAut:any[]) => {
          console.log(dataAut)
          this.todosLibros = dataAut
        }

      )

  }
  cargarArregloLibro(){

  }

  pushLibroArreglo(data){
    let autor = {
      icbn:	data[0].icbn,
      nombre:	data[0].nombre,
      numeroPaginas	: data[0].numeroPaginas,
      edicion	: data[0].edicion,
      fechaPublicacion:	data[0].fechaPublicacion,
      nombreEditorial	:data[0].nombreEditorial,
      imgLibro: data[0].imgLibro
    }
    this.arregloLibros.push(autor);
  }

  metodo() {
    /*this.todosLibros.forEach(function(element) {
      if(element.id==id){
        console.log(element.nombre)
      }

    });*/
    this.http.get(`http://localhost:1337/listacompra`)
      .subscribe(
        (dataAut:any[]) => {
          this.http.get(`http://localhost:1337/compras?idCompra=${dataAut.length}`)
            .subscribe(
              (dataAut:any[]) => {
                for (let i = 0;i<=dataAut.length; i++) {
                  this.imprimir(dataAut[i].idItem)

                }
              }

            )
        }

      )





  }

  imprimir(i){

    this.http.get(`http://localhost:1337/libro?id=${i}`)
      .subscribe(
        (dataAut:any[]) => {
          /*console.log(dataAut[0].nombre)*/
          this.arregloLibros.push(dataAut)
        }

      )

  }
  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }
  metodo1(){
    console.log('El resultado es:'+ this.listaComp)
  }
  display: boolean = false;

  showDialog() {
    this.display = true;
  }

  cambiarFactura(){
    /*this.nombres= ''+ document.getElementById("username").value
    this.apellidos= ''+ document.getElementById("apellido").value
    this.cedula= ''+ document.getElementById("cedula").value
    this.direccion= ''+ document.getElementById("direccion").value
    this.email= ''+ document.getElementById("email").value*/

  }
  completarOrden(){
    this.carritoCompras()
    this.http.post(`http://localhost:1337/listacompra`,{
      "createdAt": 1531424650631,
      "updatedAt": 1531424650631,
      "factura": "fact2345"

    }).subscribe(
      (data:any) => {
        console.log(data)
      }

    )
  }
}
