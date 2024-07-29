import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { IProduct } from '../../models/product.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'cfs-product-card',
  standalone: true,
  imports: [CurrencyPipe, RouterModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: IProduct;

  getImageUrl(product: IProduct) {
    if(!product) return ' ';
      return '/assets/images/catalog/' + product.imageName;
  }
}
