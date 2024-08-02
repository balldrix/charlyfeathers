import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './components/checkout-popup/catalog/catalog.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { BasketComponent } from './components/basket/basket.component';

const title = 'Charly Feathers. Inspired by nature and the simple things in life.';

export const routes: Routes = [
	{ path: 'home', component: HomeComponent, title: "Home | " + title },
	{ path: 'catalog', component: CatalogComponent, title: "Catalog | " + title },
	{ path: 'catalog/:filter', component: CatalogComponent, title: "Catalog | " + title },
	{ path: 'product/:id', component: ProductDetailsComponent },
	{ path: 'about', component: AboutMeComponent, title: "About Me | " + title },
	{ path: 'basket', component: BasketComponent, title: "Basket | " + title },
	{ path: '', redirectTo: '/home', pathMatch: 'full' }
];
