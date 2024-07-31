import { Component } from '@angular/core';
import { BasketService } from '../services/basket.service';
import { IProduct } from '../models/product.model';
import { RouterLink } from '@angular/router';
import { ProductService } from '../services/product.service';
import { IBasketItem } from '../models/basket-item.model';

@Component({
  selector: 'cfs-basket',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent {
  public basket!: IBasketItem[];

  constructor(
    private basketService: BasketService,
    private productService: ProductService
  ) {}

  ngOnInit() {
      this.basketService.getBasket().subscribe((basket) => {
          this.basket = basket;
      });

      console.log(this.basket);
    }

  getImageUrl(product: IProduct) {
    return this.productService.getImageUrl(product);
  }
}
