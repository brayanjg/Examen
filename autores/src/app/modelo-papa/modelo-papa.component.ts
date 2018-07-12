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


}
