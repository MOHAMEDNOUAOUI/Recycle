import { Component } from '@angular/core';
import { ButtonStaticComponent } from "../../../components/button-static/button-static.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  imports: [ButtonStaticComponent , RouterLink],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {

}
