import { Component } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { ProductCardComponent } from './product-card/product-card.component';
import { PaginationComponent } from "./pagination/pagination.component";
import { OrderByFilterComponent } from "./order-by-filter/order-by-filter.component";
import { SortOrder } from './order-by-filter/order-by-filter.component';
import { Category, CategoryFilterComponent } from "./category-filter/category-filter.component";
import { NumProductsFilterComponent } from "./num-products-filter/num-products-filter.component";
import { BehaviorSubject } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'cfs-catalog',
  standalone: true,
  imports: [ProductCardComponent, PaginationComponent, OrderByFilterComponent, CategoryFilterComponent, NumProductsFilterComponent],
  providers: [TitleCasePipe],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})

export class CatalogComponent {
  products: IProduct[] = [];
  itemsPerPage: BehaviorSubject<number> = new BehaviorSubject(10);
  currentPage: number = 1;
  filter: string = Category.all;
  orderBy: SortOrder = SortOrder.popularity;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private titleCasePipe: TitleCasePipe
  ) {
  }

  ngOnInit() {
    console.log('OnInit(): catalog');

    this.productService.getProducts().subscribe( (products) => {
      this.products = products;
    });

    let filter = this.route.snapshot.paramMap.get('filter');
    if(filter) {
        let category = filter.replaceAll('-', ' ');
        category = this.titleCasePipe.transform(category);
        console.log('category: ' + category);
        this.filter = category;
      }     
      
      console.log('Catalog filter:' + this.filter);
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