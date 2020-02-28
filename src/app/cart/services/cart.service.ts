import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cartItems: CartItem[] = [];

  private _amount = 0; //total amount
  private _count = 0; //total items in cart

  get cartItems() {
    return this._cartItems;
  }

  set cartItems(items: CartItem[]) {
    this._cartItems = items;
  }

  get count() {
    return this._count;
  }

  set count(value: number) {
    this._count = value;
  }

  get amount() {
    return this._amount;
  }

  set amount(value: number) {
    this._amount = value;
  }

  constructor() {
    console.log('cartservice created');
  }

  calculate(): void {
    let amount = 0; //local function variable
    let count = 0;

    for (let CartItem of this._cartItems) {
      amount += CartItem.price * CartItem.qty;
      count += CartItem.qty;
    }

    //setter and set values
    this.amount = amount;
    this.count = count;
  }

  addItem(cartItem: CartItem) {
    this._cartItems.push(cartItem);
    this.calculate();
  }

  removeItem(id: number) {
    const index = this._cartItems.findIndex(item => item.id == id)
    this._cartItems.splice(index, 1);
    this.calculate();
  }

  empty() {
    this._cartItems.splice(0, this._cartItems.length);
    this.calculate();
  }
}


