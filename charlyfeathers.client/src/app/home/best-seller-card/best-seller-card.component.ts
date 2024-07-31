import { Component, Input } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { BasketService } from '../../services/basket.service';
import { ProductService } from '../../services/product.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'cfs-best-seller-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './best-seller-card.component.html',
  styleUrl: './best-seller-card.component.css'
})
export class BestSellerCardComponent {
  @Input() product!: IProduct;
  
  constructor(
    private basketService: BasketService,
    private productService: ProductService
  ) {}

  addToBasket(product: IProduct) {
    this.basketService.addToBasket(product);
  }

  getImgUrl(product: IProduct) {
    return this.productService.getImageUrl(product);
  }
}

