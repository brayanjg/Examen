import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-padre',
  templateUrl: './card-padre.component.html',
  styleUrls: ['./card-padre.component.css']
})
export class CardPadreComponent implements OnInit {
  @Input() public nombre= ""
  @Input() public fecha= ""
  @Input() public img= ""

  constructor() { }

  ngOnInit() {
  }

}
