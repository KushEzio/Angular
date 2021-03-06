import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  // dependency injection
  // angular creates instance for cartservice
  // inject into component constructor

  constructor(private cartService: CartService) {
    console.log("cart component created");
  }

  ngOnInit() {
  }

  addItem(){
    const id= Math.ceil(Math.random()* 100);
    const cartItem= new CartItem();
    cartItem.id= id;
    cartItem.name=`Product ${id}`;
    cartItem.price=Math.ceil(Math.random()* 10000);
    cartItem.qty=1;

    this.cartService.addItem(cartItem);
  }

  clear(){
    this.cartService.empty();
  }

}
