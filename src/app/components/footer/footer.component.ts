import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
// @ViewChild('footHighlight',{static:true}):

  // <app-footer appCompany="Sapient"
  @Input("company")// alias name for property binding
  appCompany:string;

  today: Date= new Date();
  constructor() { }

  ngOnInit() {
  }

}
