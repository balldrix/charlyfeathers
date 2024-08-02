import { Component } from '@angular/core';
import { BasketService } from '../services/basket.service';
import { IProduct } from '../models/product.model';
import { RouterLink } from '@angular/router';
import { ProductService } from '../services/product.service';
import { IBasketItem } from '../models/basket-item.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'cfs-basket',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent {
  public basket!: IBasketItem[];
  faTrash = faTrashCan;

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

  increaseQuantity(item: IBasketItem) {
    this.basketService.addToBasket(item.product);
  }

  decreaseQuantity(item: IBasketItem) {
    this.basketService.removeSingleItem(item.product);
  }

  get grandTotal() {
    return this.basketService.totalPrice;
  }

  removeAll(item: IBasketItem) {
    this.basketService.removeAll(item.product);  
  }
}
