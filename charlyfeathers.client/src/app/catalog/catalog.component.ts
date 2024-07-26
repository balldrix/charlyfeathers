import { Component } from '@angular/core';
import { IProduct } from '../models/product.model';
import { ProductCardComponent } from './product-card/product-card.component';
import { PaginationComponent } from "./pagination/pagination.component";
import { OrderByFilterComponent } from "./order-by-filter/order-by-filter.component";
import { SortOrder } from './order-by-filter/order-by-filter.component';
import { Category, CategoryFilterComponent } from "./category-filter/category-filter.component";

@Component({
  selector: 'cfs-catalog',
  standalone: true,
  imports: [ProductCardComponent, PaginationComponent, OrderByFilterComponent, CategoryFilterComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})

export class CatalogComponent {
  products: IProduct[] = [];
  filter: string = "All";
  currentPage: number = 1;
  itemsPerPage: number = 12;
  orderBy: SortOrder = SortOrder.popularity;

  constructor() {
  }

  ngOnInit() {
    this.products = 
      [
        {
            "id": 1,
            "name": "Floss Drops Set",
            "description": "Colorful floss drops for organizing embroidery threads.",
            "imageName": "floss-drops-gelliPrinted-birbruary 1.png",
            "category": "floss drops",
            "price": 2.99,
            "weight": 0.1,
            "stockCount": 100,
            "isCommision": false,
            "totalSales": 50
        },
        {
            "id": 2,
            "name": "Needle Minder - Owl",
            "description": "Beautiful needle minder with owl design.",
            "imageName": "needle-minder-owl.jpg",
            "category": "needle minders",
            "price": 4.49,
            "weight": 0.05,
            "stockCount": 75,
            "isCommision": true,
            "totalSales": 30
        },
        {
            "id": 3,
            "name": "Ring Bling Kit",
            "description": "Assorted ring bling accessories for cross stitch enthusiasts.",
            "imageName": "flossdrops-decorative-helloAutumn 1.png",
            "category": "ring bling",
            "price": 9.99,
            "weight": 0.2,
            "stockCount": 50,
            "isCommision": false,
            "totalSales": 20
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
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
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
}