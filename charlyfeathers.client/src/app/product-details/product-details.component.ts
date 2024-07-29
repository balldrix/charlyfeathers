import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IProduct } from '../models/product.model';

@Component({
  selector: 'cfs-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product: IProduct | undefined;
  
  constructor(
    private titleService: Title,
  ) {
    this.titleService.setTitle(this.product?.name + " | Charly Feathers. Inspired by nature and the simple things in life.");
  }

}
