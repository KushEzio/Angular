import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
// import { Subject } from "rxjs";
import { BehaviorSubject } from "rxjs";

@Injectable(
  {
  providedIn: 'root'
}
)
export class CartService {

  private _cartItems: CartItem[] = [];

  private _amount = 0; //total amount
  private _count = 0; //total items in cart

  // public amount$: Subject<number>= new Subject();
  // public count$: Subject<number>=new Subject();
  public amount$: BehaviorSubject<number>= new BehaviorSubject(this._amount);
  public count$: BehaviorSubject<number>=new BehaviorSubject(this._count);

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
    console.log("count is ", value);
    this.count$.next(this._count);
  }

  get amount() {
    return this._amount;
  }

  set amount(value: number) {
    this._amount = value;
    console.log("amount is ", value);
    // publish the values to subscriber
    this.amount$.next(this._amount);
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
    // const index = this._cartItems.findIndex(item => item.id == id)
    // this._cartItems.splice(index, 1);
    this._cartItems.splice(id,1);
    this.calculate();
  }

  empty() {
    this._cartItems.splice(0, this._cartItems.length);
    this.calculate();
  }
}


