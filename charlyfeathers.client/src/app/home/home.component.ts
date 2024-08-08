import { Component } from '@angular/core';
import { BestSellerCardComponent } from './best-seller-card/best-seller-card.component';
import { InstagramFeedComponent } from "./instagram-feed/instagram-feed.component";
import { ProductService } from '../services/product.service';
import { IProduct } from '../models/product.model';
import { RouterLink } from '@angular/router';
import { ROUTER_TOKENS } from '../app.routes';

@Component({
  selector: 'cfs-home',
  standalone: true,
  imports: [RouterLink, BestSellerCardComponent, InstagramFeedComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly ROUTER_TOKENS = ROUTER_TOKENS;
  readonly maxBestSellers: number = 8;
  bestSellers!: IProduct[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      let sortedProducts = products.sort((p1, p2) => p2.totalSales - p1.totalSales);
      this.bestSellers = sortedProducts.slice(0, this.maxBestSellers);
    })
  }
}