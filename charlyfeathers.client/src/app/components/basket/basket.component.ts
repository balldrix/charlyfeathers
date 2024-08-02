import { Component } from '@angular/core';
import { BasketService } from '../../services/basket.service';
import { IProduct } from '../../models/product.model';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { IBasketItem } from '../../models/basket-item.model';
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
  basket!: IBasketItem[];
  faTrash = faTrashCan;

  constructor(
    private basketService: BasketService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.basketService.getBasket().subscribe((basket) => {
      this.basket = basket;
    });
  }

  getImageUrl(product: IProduct) {
    return this.productService.getImageUrl(product);
  }

  increaseQuantity(item: IBasketItem) {  
    item.quantity++;
  }

  decreaseQuantity(item: IBasketItem) {  
    if(item.quantity > 1)  
      item.quantity--;
  }

  updateBasket() {
    this.basketService.updateBasket(this.basket);
  }

  getItemTotalPrice(item: IBasketItem) {
    let i = this.basketService.getItem(item.product.id);

    if(i) {
      console.log(i);
      console.log(item);
      return i.quantity * i.product.price;
    }

    return 0;
  }

  get grandTotal() {
    return this.basketService.totalPrice;
  }

  removeAll(item: IBasketItem) {
    this.basketService.removeAll(item.product);  
  }
}
