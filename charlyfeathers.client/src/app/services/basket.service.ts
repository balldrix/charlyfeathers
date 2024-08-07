import { Injectable } from '@angular/core';
import { IProduct } from '../models/product.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { IBasketItem } from '../models/basket-item.model';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private basket: BehaviorSubject<IBasketItem[]> = new BehaviorSubject<IBasketItem[]>([]);

  constructor() { }

  getBasket(): Observable<IBasketItem[]> {
    return this.basket.asObservable();
  }

  addToBasket(product: IProduct) {
    let basket = this.basket.getValue();
    
    if(basket.find((i) => i.product.id == product.id)) {
      let index = basket.findIndex(i => i.product.id == product.id)
      basket[index].quantity++;
    }
    else {
      let item = {
        product: product, quantity: 1
      };
      basket.push(item);
    }
      
    this.basket.next(basket);

    console.log(this.basket);
    // TODO: add http post to api
  }

  removeAll(product: IProduct) {
    let basket = this.basket.getValue().filter((p) => p.product != product);
    this.basket.next(basket);
  }

  emptyBasket() {
    this.basket.next([]);
  }

  updateBasket(basket: IBasketItem[]) {
    this.basket.next(basket);
  }

  getItem(id: number) {
    return this.basket.getValue().find((item) => item.product.id == id )
  }

  get totalPrice() {
    let totalPrice = 0;
    let products = this.basket.getValue();
    products.map((i:IBasketItem) => {
      totalPrice += i.product.price * i.quantity;
    })

    return totalPrice;
  }
}
