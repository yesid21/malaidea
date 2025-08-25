import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

export interface CartItem {
  product: Product;
  size: string;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private cart: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cartSubject.asObservable();

  addToCart(product: Product, size: string, quantity: number) {
    const existing = this.cart.find(
      item => item.product.id === product.id && item.size === size
    );
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.cart.push({ product, size, quantity });
    }
    this.cartSubject.next(this.cart);
  }

  getCart() {
    return this.cart;
  }
}
