import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { IProduct } from '../../models/product.model';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../product.service';

@Component({
  selector: 'cfs-product-card',
  standalone: true,
  imports: [CurrencyPipe, RouterModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: IProduct;
  
  constructor(private productService: ProductService){    
  }

  getImageUrl(product: IProduct) {
    return this.productService.getImageUrl(product);
  }
}
