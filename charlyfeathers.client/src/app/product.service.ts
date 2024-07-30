import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<IProduct[]> {
    let products : IProduct[] = 
    [
      {
        "id": 1,
        "name": "Rainbow Floss Drops",
        "routerName": "rainbow-floss-drops",
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
        "routerName": "gold-needle-minder",
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
        "routerName": "silver-ring-bling",
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
        "routerName": "vintage-floss-drops",
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
        "routerName": "heart-needle-minder",
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
        "routerName": "diamond-ring-bling",
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
        "routerName": "rainbow-floss-drops",
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
        "routerName": "rainbow-floss-drops",
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
        "routerName": "rainbow-floss-drops",
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
        "routerName": "rainbow-floss-drops",
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
        "routerName": "rainbow-floss-drops",
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
        "routerName": "rainbow-floss-drops",
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
        "routerName": "rainbow-floss-drops",
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
        "routerName": "rainbow-floss-drops",
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
        "routerName": "rainbow-floss-drops",
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
        "routerName": "rainbow-floss-drops",
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
        "routerName": "rainbow-floss-drops",
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
        "routerName": "rainbow-floss-drops",
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
        "routerName": "rainbow-floss-drops",
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
        "routerName": "rainbow-floss-drops",
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
        "routerName": "rainbow-floss-drops",
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

    products.forEach((product) =>
      {
      let routerName = product.name;
      routerName = routerName.replaceAll(' ', '-').toLocaleLowerCase();
      product.routerName = routerName;
    });

    return of(products);
  }
}