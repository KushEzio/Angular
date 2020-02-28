import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CartService } from './services/cart.service';



@NgModule({
  declarations: [
    CartComponent,
    CartListComponent,
    CartSummaryComponent,

  ],
  imports: [
    CommonModule
  ],
  exports: [
    CartComponent
  ],
  providers: [
    //ng 2 ,4, 5
    //for ng6 onwards, not needed if decorator (@Injectable) statement is there in service itself
    CartService
  ]
})
export class CartModule { }
