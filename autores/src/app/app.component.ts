import {AfterViewInit, Component, Input, OnInit, Pipe, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ModeloHijoComponent} from "./modelo-hijo/modelo-hijo.component";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{
  busquedaCompras
  @ViewChild(ModeloHijoComponent) message: ModeloHijoComponent;

  @Input() public compras= 0
  descripcion= ' '
  boolCrearLibros = true;
  autorID = 'Autor ID'
  nombre = '';
  images: Array<string>;
  tit='Presione sobre algun Libro para ver mas detalles'
  arregloBook = [
    {
      icbn:'235432',
      nombre: 'la rayuela',
      numeroPaginas: 120,
      edicion: 'segunda',
      fechaPublicacion: '1940',
      nombreEditorial: 'x',
      autorId:0
    }
  ];

  ngOnInit() {
    this.carritoCompras()
  }
  constructor( private http: HttpClient) {}




  private _randomImageUrls(images: Array<{id: number}>): Array<string> {

    return [1, 2, 3].map(() => {
      const randomId = images[Math.floor(Math.random() * images.length)].id;
      return `https://picsum.photos/900/500?image=${randomId}`;
    });
  }
    Titulo='Presione sobre algun autor';
    CardTitulo='';
    CardBody='';

   arregloAutores = [
     {
  nombres: 'julio',
  apellidos: 'cortazar',
  fechaNacimiento: '1914',
  numeroLibros: 50,
  ecuatoriano: false
}
];


  crearAutor (nombre,apellido,fecha,numero,ecuatoriano){
   let autor = {
      nombres: nombre,
      apellidos: apellido,
      fechaNacimiento: fecha,
      numeroLibros: Number(numero),
      ecuatoriano: ecuatoriano

  }
  this.arregloAutores.push(autor);
    alert('Se creo el autor');
   return this.arregloAutores;
    }


    llenarBoton(boton){
    if (this.arregloAutores.length<=boton){
      return 'Vacio'
    }
    else{
      return this.arregloAutores[boton].nombres
    }

    }

    llenarCarrusel(boton){
    if (this.arregloAutores.length<=boton){
      alert('Este boton esta vacio')
    }
    else
    {this.Titulo = this.arregloAutores[boton].nombres+' '+ this.arregloAutores[boton].apellidos
    this.boolCrearLibros = false;
    this.autorID = boton
    }
    }

  crearLibros (icbnL,nombreL,numeroPaginaL,edicionL,fechaL,editorialL,autorL){
    let libro = {
      icbn: icbnL,
      nombre: nombreL,
      numeroPaginas: numeroPaginaL,
      edicion: edicionL,
      fechaPublicacion: fechaL,
      nombreEditorial: editorialL,
      autorId:autorL
    }
    this.arregloBook.push(libro)
    alert('Se creo el libro')
    return this.arregloBook
  }




  carritoCompras(){
    this.http.get(`http://localhost:1337/compras`)
      .subscribe(
        (dataAut:any[]) => {
          console.log(dataAut)
          this.busquedaCompras = dataAut
        }

      )
  }

}





