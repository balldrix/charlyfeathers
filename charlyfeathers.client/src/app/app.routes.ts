import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AboutMeComponent } from './about-me/about-me.component';

const title = 'Charly Feathers. Inspired by nature and the simple things in life.';

export const routes: Routes = [
	{ path: 'home', component: HomeComponent, title: "Home | " + title },
	{ path: 'catalog', component: CatalogComponent, title: "Catalog | " + title },
	{ path: 'catalog/:filter', component: CatalogComponent, title: "Catalog | " + title },
	{ path: 'product/:id', component: ProductDetailsComponent },
	{ path: 'about', component: AboutMeComponent, title: "About Me | " + title },
	{ path: '', redirectTo: '/home', pathMatch: 'full' }
];
