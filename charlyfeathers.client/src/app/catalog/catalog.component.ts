import { Component } from '@angular/core';
import { IProduct } from '../models/product.model';
import { ProductCardComponent } from './product-card/product-card.component';
import { PaginationComponent } from "./pagination/pagination.component";
import { OrderByFilterComponent } from "./order-by-filter/order-by-filter.component";
import { SortOrder } from './order-by-filter/order-by-filter.component';
import { Category, CategoryFilterComponent } from "./category-filter/category-filter.component";
import { NumProductsFilterComponent } from "./num-products-filter/num-products-filter.component";
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'cfs-catalog',
  standalone: true,
  imports: [ProductCardComponent, PaginationComponent, OrderByFilterComponent, CategoryFilterComponent, NumProductsFilterComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})

export class CatalogComponent {
  products: IProduct[] = [];
  itemsPerPage: BehaviorSubject<number> = new BehaviorSubject(10);
  currentPage: number = 1;
  filter: string = Category.all;
  orderBy: SortOrder = SortOrder.popularity;

  constructor() {
  }

  ngOnInit() {
    this.products = [
      {
        "id": 1,
        "name": "Rainbow Floss Drops",
        "description": "Colorful floss drops for organizing your threads.",
        "imageName": "needle-minder-owl.jpg",
        "category": "floss drops",
        "price": 5.99,
        "weight": 0.05,
        "stockCount": 120,
        "isCommision": false,
        "totalSales": 250
      },
      {
        "id": 2,
        "name": "Gold Needle Minder",
        "description": "A shiny gold needle minder to keep your needles in place.",
        "imageName": "needle-minder-owl.jpg",
        "category": "needle minders",
        "price": 8.99,
        "weight": 0.02,
        "stockCount": 80,
        "isCommision": true,
        "totalSales": 150
      },
      {
        "id": 3,
        "name": "Silver Ring Bling",
        "description": "Elegant silver ring bling for your cross stitch projects.",
        "imageName": "needle-minder-owl.jpg",
        "category": "ring bling",
        "price": 10.99,
        "weight": 0.03,
        "stockCount": 50,
        "isCommision": false,
        "totalSales": 75
      },
      {
        "id": 4,
        "name": "Vintage Floss Drops",
        "description": "Classic vintage-style floss drops.",
        "imageName": "needle-minder-owl.jpg",
        "category": "floss drops",
        "price": 6.49,
        "weight": 0.04,
        "stockCount": 200,
        "isCommision": true,
        "totalSales": 300
      },
      {
        "id": 5,
        "name": "Heart Needle Minder",
        "description": "Cute heart-shaped needle minder.",
        "imageName": "needle-minder-owl.jpg",
        "category": "needle minders",
        "price": 7.99,
        "weight": 0.01,
        "stockCount": 90,
        "isCommision": false,
        "totalSales": 130
      },
      {
        "id": 6,
        "name": "Diamond Ring Bling",
        "description": "Sparkling diamond ring bling for your cross stitch.",
        "imageName": "needle-minder-owl.jpg",
        "category": "ring bling",
        "price": 12.99,
        "weight": 0.02,
        "stockCount": 40,
        "isCommision": true,
        "totalSales": 60
      },
      {
        "id": 7,
        "name": "Animal Floss Drops",
        "description": "Cute animal-themed floss drops.",
        "imageName": "needle-minder-owl.jpg",
        "category": "floss drops",
        "price": 4.99,
        "weight": 0.06,
        "stockCount": 150,
        "isCommision": false,
        "totalSales": 180
      },
      {
        "id": 8,
        "name": "Butterfly Needle Minder",
        "description": "Beautiful butterfly needle minder.",
        "imageName": "needle-minder-owl.jpg",
        "category": "needle minders",
        "price": 9.49,
        "weight": 0.03,
        "stockCount": 70,
        "isCommision": true,
        "totalSales": 110
      },
      {
        "id": 9,
        "name": "Pearl Ring Bling",
        "description": "Elegant pearl ring bling for your projects.",
        "imageName": "needle-minder-owl.jpg",
        "category": "ring bling",
        "price": 11.49,
        "weight": 0.04,
        "stockCount": 60,
        "isCommision": false,
        "totalSales": 90
      },
      {
        "id": 10,
        "name": "Modern Floss Drops",
        "description": "Sleek and modern floss drops.",
        "imageName": "needle-minder-owl.jpg",
        "category": "floss drops",
        "price": 5.49,
        "weight": 0.05,
        "stockCount": 130,
        "isCommision": true,
        "totalSales": 220
      },
      {
        "id": 11,
        "name": "Star Needle Minder",
        "description": "Star-shaped needle minder for a bit of magic.",
        "imageName": "needle-minder-owl.jpg",
        "category": "needle minders",
        "price": 8.49,
        "weight": 0.02,
        "stockCount": 100,
        "isCommision": false,
        "totalSales": 140
      },
      {
        "id": 12,
        "name": "Ruby Ring Bling",
        "description": "Dazzling ruby ring bling.",
        "imageName": "needle-minder-owl.jpg",
        "category": "ring bling",
        "price": 13.49,
        "weight": 0.03,
        "stockCount": 30,
        "isCommision": true,
        "totalSales": 50
      },
      {
        "id": 13,
        "name": "Floral Floss Drops",
        "description": "Beautiful floral-patterned floss drops.",
        "imageName": "needle-minder-owl.jpg",
        "category": "floss drops",
        "price": 6.99,
        "weight": 0.04,
        "stockCount": 140,
        "isCommision": false,
        "totalSales": 200
      },
      {
        "id": 14,
        "name": "Owl Needle Minder",
        "description": "Wise owl needle minder.",
        "imageName": "needle-minder-owl.jpg",
        "category": "needle minders",
        "price": 8.99,
        "weight": 0.02,
        "stockCount": 60,
        "isCommision": true,
        "totalSales": 100
      },
      {
        "id": 15,
        "name": "Emerald Ring Bling",
        "description": "Stunning emerald ring bling.",
        "imageName": "needle-minder-owl.jpg",
        "category": "ring bling",
        "price": 14.99,
        "weight": 0.02,
        "stockCount": 45,
        "isCommision": false,
        "totalSales": 70
      },
      {
        "id": 16,
        "name": "Geometric Floss Drops",
        "description": "Trendy geometric floss drops.",
        "imageName": "needle-minder-owl.jpg",
        "category": "floss drops",
        "price": 5.99,
        "weight": 0.05,
        "stockCount": 110,
        "isCommision": true,
        "totalSales": 240
      },
      {
        "id": 17,
        "name": "Flower Needle Minder",
        "description": "Pretty flower needle minder.",
        "imageName": "needle-minder-owl.jpg",
        "category": "needle minders",
        "price": 9.99,
        "weight": 0.01,
        "stockCount": 85,
        "isCommision": false,
        "totalSales": 120
      },
      {
        "id": 18,
        "name": "Amethyst Ring Bling",
        "description": "Beautiful amethyst ring bling.",
        "imageName": "needle-minder-owl.jpg",
        "category": "ring bling",
        "price": 11.99,
        "weight": 0.04,
        "stockCount": 35,
        "isCommision": true,
        "totalSales": 65
      },
      {
        "id": 19,
        "name": "Striped Floss Drops",
        "description": "Colorful striped floss drops.",
        "imageName": "needle-minder-owl.jpg",
        "category": "floss drops",
        "price": 4.49,
        "weight": 0.06,
        "stockCount": 170,
        "isCommision": false,
        "totalSales": 210
      },
      {
        "id": 20,
        "name": "Moon Needle Minder",
        "description": "Magical moon-shaped needle minder.",
        "imageName": "needle-minder-owl.jpg",
        "category": "needle minders",
        "price": 8.99,
        "weight": 0.02,
        "stockCount": 70,
        "isCommision": true,
        "totalSales": 90
      },
      {
        "id": 21,
        "name": "Sapphire Ring Bling",
        "description": "Gorgeous sapphire ring bling.",
        "imageName": "needle-minder-owl.jpg",
        "category": "ring bling",
        "price": 3.99,
        "weight": 0.02,
        "stockCount": 2,
        "isCommision": false,
        "totalSales": 5
      }   
    ];
  }

  getFilteredProducts() : IProduct[] {
    return this.filter == Category.all ? 
      this.products :
      this.products.filter((product: IProduct) => product.category.toLowerCase() == this.filter.toLocaleLowerCase());
  }

  getSortedProducts() : IProduct[] {
    let results = this.getFilteredProducts();
    
    if (this.orderBy == SortOrder.popularity) {
      results = results.sort((p1, p2) => p1.totalSales - p2.totalSales);
    } else if (this.orderBy == SortOrder.priceAscending) {
      results = results.sort((p1, p2) => p1.price - p2.price);
    } else if (this.orderBy == SortOrder.priceDescenting) {
      results = results.sort((p1, p2) => p2.price - p1.price);
    }
    
    return results;
  }

  get paginatedProducts() : IProduct[] {
    const start = (this.currentPage - 1) * this.itemsPerPage.value;
    const end = start + this.itemsPerPage.value;
    return this.getSortedProducts().slice(start, end)
  }
    
  changePage(page: number) {
    this.currentPage = page;
  }

  changeOrder(orderBy: SortOrder) {
    this.orderBy = orderBy;
    console.log("changing order to " + orderBy);
  }

  filterCategory(filter: Category) {
    this.filter = filter;
    console.log("filtering products:" + filter);
  }
  
  changeMaxProducts(itemsPerPage: number) {
    this.currentPage = 1;
    this.itemsPerPage.next(itemsPerPage);
    console.log("items per page: " + itemsPerPage);
  }
}