import { Component } from '@angular/core';
import { BestSellerCardComponent } from './best-seller-card/best-seller-card.component';
import { InstagramFeedComponent } from "./instagram-feed/instagram-feed.component";

@Component({
  selector: 'cfs-home',
  standalone: true,
  imports: [BestSellerCardComponent, InstagramFeedComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
