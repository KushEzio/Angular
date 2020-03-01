import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/shared/models/address';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // mainOffice: Address = undefined; //null
  mainOffice: Address = null; //null


  headOffice: Address = {
    city: "BLR",
    state: "KA",
    pincode: 560001
  }
  branchOffice: Address = {
    city: "Noida",
    state: "UP",
    pincode: 201301
  }

  constructor() { }

  ngOnInit() {
  }

  contactHandler(address: Address) {
    console.log("address to contact", address);

  }

}
