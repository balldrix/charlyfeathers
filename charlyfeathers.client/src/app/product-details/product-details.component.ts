import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IProduct } from '../models/product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cfs-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product!: IProduct;
  productId!: string;
  
  constructor(
    private productService: ProductService,
    private titleService: Title,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.product?.name + " | Charly Feathers. Inspired by nature and the simple things in life.");
    
    let id = this.activateRoute.snapshot.paramMap.get('id');
    
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
}