import { Component, OnInit, OnDestroy } from '@angular/core';
import { Address } from 'src/app/shared/models/address';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit,
  OnDestroy {

  headOffice: Address

  counter: number = 0;

  timerHandle: any;


  constructor() { }

  ngOnInit() {
    //for destroy timer
    this.timerHandle = setInterval(() => {
      this.counter++;
      console.log("counter is", this.counter);
    }, 3000)
  }

  ngOnDestroy() {
    console.log("counter component ngOnDestroy");
    clearInterval(this.timerHandle);
  }

  increment(e: Event) {
    console.log("Event", e);
    console.trace(); //need not to be  use for projects
    this.counter++;
  }
}
