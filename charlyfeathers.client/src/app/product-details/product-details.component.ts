import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IProduct } from '../models/product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'cfs-product-details',
  standalone: true,
  imports: [TitleCasePipe, RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product!: IProduct;
  productId!: string;
  
  constructor(
    private productService: ProductService,
    private titleService: Title,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.product?.name + " | Charly Feathers. Inspired by nature and the simple things in life.");
    
    let id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.productId = id;
    }
    
    this.productService.getProducts().subscribe((products) => {
      let product = products.find(p => p.routerName == this.productId);
      if (product) {
        this.product = product;
      }      
    })
  }

  get categoryRoute() {
    return this.product.category.replaceAll(' ', '-');
  }
}