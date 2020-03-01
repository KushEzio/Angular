import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from 'src/app/cart/services/cart.service';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';

import { CartItem } from 'src/app/cart/models/cart-item';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  fieldName: string;
  operator: string;
  expectedValue: number;


  // service using async pipe in html



  products$: Observable<Product[]>;

  constructor(private productService: ProductService,
    private cartService: CartService) {


  }

  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }

  addToCart(product: Product) {


    const cartItem = new CartItem();
    cartItem.id = product.id;
    cartItem.name = product.name;
    cartItem.price = product.price;
    cartItem.qty = 1;


    console.log("product", product);
    this.cartService.addItem(cartItem);
  }

  deleteProduct(value: number) {
    this.productService.deleteProduct(value).subscribe(obj => {
      console.log("deleted successfully");
      this.products$ = this.productService.getProducts();
    })


  }

}
