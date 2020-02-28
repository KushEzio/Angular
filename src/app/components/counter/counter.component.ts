import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/shared/models/address';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  headOffice: Address

  counter: number = 0;
  constructor() { }

  ngOnInit() {
  }
  increment(e:Event) {
    console.log("Event", e);
    console.trace(); //need not to be  use for projects
    this.counter++;
  }
}
