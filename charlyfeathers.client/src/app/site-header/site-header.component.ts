import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'cfs-site-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.css'
})

export class SiteHeaderComponent {
  faUser = faUser;
  faMagnifyingGlass = faMagnifyingGlass;
  faHeart = faHeart;
  faShoppingCart = faShoppingCart;
}
