import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {


  clickCount=0
  clickMe() {
    this.clickCount++;
  }
  constructor() { }

  ngOnInit() {
  }

}