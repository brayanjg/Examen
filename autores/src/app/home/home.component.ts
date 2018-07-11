import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient)
  {
    }

  ngOnInit() {
  }
getAutor (){
    this.http.get(`http://localhost:1337/autor`).subscribe((data:any [])=>{console.log(data)})

}
}
