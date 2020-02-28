import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Address } from '../../models/address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
// Input is for property binding
// [address]="headOffice"

  @Input() address:Address;

  //Output & Event -> child to parent
  @Output()contactEvent: EventEmitter<Address>=new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  contact(){
    // trigger and event
    // subscribed by parent component
    // (contactEvent)="expr"
    // the value passed in event, received as $event
    this.contactEvent.emit(this.address);
  }

}
