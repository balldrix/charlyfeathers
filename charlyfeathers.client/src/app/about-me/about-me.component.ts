import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'cfs-about-me',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  faInstagram = faInstagram;
  faYoutube = faYoutube;
}
