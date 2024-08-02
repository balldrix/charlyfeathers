import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'cfs-site-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FontAwesomeModule],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.css'
})

export class SiteHeaderComponent {
  faUser = faUser;
  faMagnifyingGlass = faMagnifyingGlass;
  faHeart = faHeart;
  faShoppingBasket = faShoppingBasket;
}
