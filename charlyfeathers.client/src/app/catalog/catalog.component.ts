import { Component, NgModule } from '@angular/core';
import { IProduct } from '../models/product.model';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'cfs-catalog',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})

export class CatalogComponent {
  protected products: IProduct[] = [];
  protected filter: string = "All";
  
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
    ];
  }
}