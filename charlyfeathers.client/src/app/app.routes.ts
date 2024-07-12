import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
	{ path: 'home', component: HomeComponent, title:"Home - Charly Feathers. Inspired by nature and the simple things in life." },
	{ path: '', redirectTo: '/home', pathMatch: 'full' }
];
