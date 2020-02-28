import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  cartItems: CartItem[];

  constructor(private cartService: CartService) {
    console.log("Cartlist component created");
    this.cartItems= this.cartService.cartItems;
   }

  ngOnInit() {
  }

}
