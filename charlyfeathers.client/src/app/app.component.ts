import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SiteHeaderComponent } from "./components/site-header/site-header.component";
import { SiteFooterComponent } from "./components/site-footer/site-footer.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, SiteHeaderComponent, SiteFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
