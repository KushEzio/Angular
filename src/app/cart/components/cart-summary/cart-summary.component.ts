import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit, OnDestroy {

  amount: number;
  count: number;

  amountSubscription: Subscription;
  countSubscription: Subscription;

  constructor(private cartservice: CartService) {
    console.log("cartsummary component created");
// fixed with behaviour
    // this.amount= this.cartservice.amount;
    // this.count= this.cartservice.count;
   }

  ngOnInit() {

    // subscribe for the changes
    this.amountSubscription=this.cartservice.
      amount$.subscribe((value:number)=>{
        console.log("summary subscriber",value);
        this.amount=value;
      })

     this.countSubscription= this.cartservice.count$.subscribe((value:number)=>{
        console.log("summary amount", value);
        this.count=value;
      })
  }

  ngOnDestroy(){
    console.log("cart-summary destroyed ngOnDestroy");
    this.amountSubscription.unsubscribe();
    this.countSubscription.unsubscribe();
    
  }

}
