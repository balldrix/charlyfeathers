import { Component } from '@angular/core';

@Component({
  selector: 'cfs-site-footer',
  standalone: true,
  imports: [],
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.css'
})
export class SiteFooterComponent {
  protected currentYear: number = new Date().getFullYear();
}
