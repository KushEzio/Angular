import { Component, OnInit } from "@angular/core";

//MVW - Model View Whatever

@Component({
    //meta
    //try to avoid default selectors using 'app' so follow naming conventions
    selector: 'app-root',
    //every component should have its template
    templateUrl: "app.component.html",
    //scopped styles
    styleUrls: [
        'app.component.scss'
    ]

})
export class AppComponent implements OnInit {

    //model attributes 
    //bindable to view
    appTitle: string = "Product App";

    constructor(){
        console.log("App comp constructor");
    }

    //callback, called by framework after loading view into browser
    ngOnInit(){
        //prefered for dynamic properties 
        console.log("App component ngOnInit");

    }
}