import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { ROUTER_TOKENS } from '../../app.routes';

@Component({
  selector: 'cfs-site-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FontAwesomeModule],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.css'
})

export class SiteHeaderComponent {
  readonly ROUTER_TOKENS = ROUTER_TOKENS;
  faUser = faUser;
  faMagnifyingGlass = faMagnifyingGlass;
  faHeart = faHeart;
  faShoppingBasket = faShoppingBasket;
}
