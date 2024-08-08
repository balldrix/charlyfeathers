import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { BasketComponent } from './components/basket/basket.component';
import { AccountComponent } from './account/account.component';

const title = 'Charly Feathers. Inspired by nature and the simple things in life.';

export enum ROUTER_TOKENS {
	HOME = 'home',
	CATALOG = 'catalog',
	PRODUCT = 'product',
	ABOUT = 'about',
	ACCOUNT = 'account',
	BASKET = 'basket'
}

export const routes: Routes = [
	{ path: ROUTER_TOKENS.HOME, component: HomeComponent, title: "Home | " + title },
	{ path: ROUTER_TOKENS.CATALOG, component: CatalogComponent, title: "Catalog | " + title },
	{ path: ROUTER_TOKENS.CATALOG + '/:filter', component: CatalogComponent, title: "Catalog | " + title },
	{ path: ROUTER_TOKENS.PRODUCT + '/:id', component: ProductDetailsComponent },
	{ path: ROUTER_TOKENS.ABOUT, component: AboutMeComponent, title: "About Me | " + title },
	{ path: ROUTER_TOKENS.ACCOUNT, component: AccountComponent, title: "Account | " + title },
	{ path: ROUTER_TOKENS.BASKET, component: BasketComponent, title: "Basket | " + title },
	{ path: '', redirectTo: ROUTER_TOKENS.HOME, pathMatch: 'full' }
];
