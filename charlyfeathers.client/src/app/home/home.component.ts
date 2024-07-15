import { Component } from '@angular/core';
import { BestSellerCardComponent } from '../best-seller-card/best-seller-card.component';

@Component({
  selector: 'cfs-home',
  standalone: true,
  imports: [BestSellerCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
