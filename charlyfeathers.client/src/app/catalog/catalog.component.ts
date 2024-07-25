import { Component } from '@angular/core';
import { IProduct } from '../models/product.model';
import { ProductCardComponent } from './product-card/product-card.component';
import { PaginationComponent } from "./pagination/pagination.component";

@Component({
  selector: 'cfs-catalog',
  standalone: true,
  imports: [ProductCardComponent, PaginationComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})

export class CatalogComponent {
  products: IProduct[] = [];
  filter: string = "All";
  currentPage: number = 1;
  itemsPerPage: number = 20;

  ngOnInit() {
    this.products = 
    [
      { 
        id: 0, 
        name: "Mr Feathers' Owl",
        description: "Hand painted needle minder - Owl Created by my husband.",
        imageName: "needle-minder-owl.jpg",
        category: "Needle Minder",
        price: 12.0,
        weight: 0.2,
        isCommision: false,
        stockCount: 1
      },
      { 
        id: 1, 
        name: "Mr Feathers' Owl",
        description: "Hand painted needle minder - Owl Created by my husband.",
        imageName: "needle-minder-owl.jpg",
        category: "Needle Minder",
        price: 12.0,
        weight: 0.2,
        isCommision: false,
        stockCount: 1
      },    
      { 
        id: 2, 
        name: "Mr Feathers' Owl",
        description: "Hand painted needle minder - Owl Created by my husband.",
        imageName: "needle-minder-owl.jpg",
        category: "Needle Minder",
        price: 12.0,
        weight: 0.2,
        isCommision: false,
        stockCount: 1
      }, 
      { 
        id: 3, 
        name: "Mr Feathers' Owl",
        description: "Hand painted needle minder - Owl Created by my husband.",
        imageName: "needle-minder-owl.jpg",
        category: "Needle Minder",
        price: 12.0,
        weight: 0.2,
        isCommision: false,
        stockCount: 1
      }, 
      { 
        id: 4, 
        name: "Mr Feathers' Owl",
        description: "Hand painted needle minder - Owl Created by my husband.",
        imageName: "needle-minder-owl.jpg",
        category: "Needle Minder",
        price: 12.0,
        weight: 0.2,
        isCommision: false,
        stockCount: 1
      }, 
      { 
        id: 5, 
        name: "Mr Feathers' Owl",
        description: "Hand painted needle minder - Owl Created by my husband.",
        imageName: "needle-minder-owl.jpg",
        category: "Needle Minder",
        price: 12.0,
        weight: 0.2,
        isCommision: false,
        stockCount: 1
      }, 
      { 
        id: 6, 
        name: "Mr Feathers' Owl",
        description: "Hand painted needle minder - Owl Created by my husband.",
        imageName: "needle-minder-owl.jpg",
        category: "Needle Minder",
        price: 12.0,
        weight: 0.2,
        isCommision: false,
        stockCount: 1
      }, 
      { 
        id: 7, 
        name: "Mr Feathers' Owl",
        description: "Hand painted needle minder - Owl Created by my husband.",
        imageName: "needle-minder-owl.jpg",
        category: "Needle Minder",
        price: 12.0,
        weight: 0.2,
        isCommision: false,
        stockCount: 1
      }, 
      { 
        id: 8, 
        name: "Mr Feathers' Owl",
        description: "Hand painted needle minder - Owl Created by my husband.",
        imageName: "needle-minder-owl.jpg",
        category: "Needle Minder",
        price: 12.0,
        weight: 0.2,
        isCommision: false,
        stockCount: 1
      }, 
      { 
        id: 9, 
        name: "Mr Feathers' Owl",
        description: "Hand painted needle minder - Owl Created by my husband.",
        imageName: "needle-minder-owl.jpg",
        category: "Needle Minder",
        price: 12.0,
        weight: 0.2,
        isCommision: false,
        stockCount: 1
      }, 
      { 
        id: 10, 
        name: "Mr Feathers' Owl",
        description: "Hand painted needle minder - Owl Created by my husband.",
        imageName: "needle-minder-owl.jpg",
        category: "Needle Minder",
        price: 12.0,
        weight: 0.2,
        isCommision: false,
        stockCount: 1
      }, 
      { 
        id: 11, 
        name: "Mr Feathers' Owl",
        description: "Hand painted needle minder - Owl Created by my husband.",
        imageName: "needle-minder-owl.jpg",
        category: "Needle Minder",
        price: 12.0,
        weight: 0.2,
        isCommision: false,
        stockCount: 1
      },
      { 
        id: 12, 
        name: "Mr Feathers' Owl",
        description: "Hand painted needle minder - Owl Created by my husband.",
        imageName: "needle-minder-owl.jpg",
        category: "Needle Minder",
        price: 12.0,
        weight: 0.2,
        isCommision: false,
        stockCount: 1
      }, 
      { 
        id: 13, 
        name: "Mr Feathers' Owl",
        description: "Hand painted needle minder - Owl Created by my husband.",
        imageName: "needle-minder-owl.jpg",
        category: "Needle Minder",
        price: 12.0,
        weight: 0.2,
        isCommision: false,
        stockCount: 1
      }, 
      { 
        id: 14, 
        name: "Mr Feathers' Owl",
        description: "Hand painted needle minder - Owl Created by my husband.",
        imageName: "needle-minder-owl.jpg",
        category: "Needle Minder",
        price: 12.0,
        weight: 0.2,
        isCommision: false,
        stockCount: 1
      }, 
      { 
        id: 15, 
        name: "Mr Feathers' Owl",
        description: "Hand painted needle minder - Owl Created by my husband.",
        imageName: "needle-minder-owl.jpg",
        category: "Needle Minder",
        price: 12.0,
        weight: 0.2,
        isCommision: false,
        stockCount: 1
      }, 
      { 
        id: 16, 
        name: "Mr Feathers' Owl",
        description: "Hand painted needle minder - Owl Created by my husband.",
        imageName: "needle-minder-owl.jpg",
        category: "Needle Minder",
        price: 12.0,
        weight: 0.2,
        isCommision: false,
        stockCount: 1
      }, 
      { 
        id: 17, 
        name: "Mr Feathers' Owl",
        description: "Hand painted needle minder - Owl Created by my husband.",
        imageName: "needle-minder-owl.jpg",
        category: "Needle Minder",
        price: 12.0,
        weight: 0.2,
        isCommision: false,
        stockCount: 1
      }, 
      { 
        id: 18, 
        name: "Mr Feathers' Owl",
        description: "Hand painted needle minder - Owl Created by my husband.",
        imageName: "needle-minder-owl.jpg",
        category: "Needle Minder",
        price: 12.0,
        weight: 0.2,
        isCommision: false,
        stockCount: 1
      }, 
      { 
        id: 19, 
        name: "Mr Feathers' Owl",
        description: "Hand painted needle minder - Owl Created by my husband.",
        imageName: "needle-minder-owl.jpg",
        category: "Needle Minder",
        price: 12.0,
        weight: 0.2,
        isCommision: false,
        stockCount: 1
      }, 
      { 
        id: 20, 
        name: "Mr Feathers' Owl",
        description: "Hand painted needle minder - Owl Created by my husband.",
        imageName: "needle-minder-owl.jpg",
        category: "Needle Minder",
        price: 12.0,
        weight: 0.2,
        isCommision: false,
        stockCount: 1
      }, 
      { 
        id: 21, 
        name: "Mr Feathers' Owl",
        description: "Hand painted needle minder - Owl Created by my husband.",
        imageName: "needle-minder-owl.jpg",
        category: "Needle Minder",
        price: 12.0,
        weight: 0.2,
        isCommision: false,
        stockCount: 1
      },  
    ];
  }

  get paginatedProducts() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;

    return this.products.slice(start, end);
  }
    
  changePage(page: number) {
    this.currentPage = page;
  }
}