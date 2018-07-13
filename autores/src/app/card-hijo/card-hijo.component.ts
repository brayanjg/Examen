import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-hijo',
  templateUrl: './card-hijo.component.html',
  styleUrls: ['./card-hijo.component.css']
})
export class CardHijoComponent implements OnInit {
  @Input() compras=0

  @Input() public nombre= ""
  @Input() public fecha= ""
  @Input() public img= ""

  constructor() { }

  ngOnInit() {
  }

}
