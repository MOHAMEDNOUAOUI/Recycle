import { Component } from '@angular/core';
import { HeroSectionComponent } from "../../features/Collector/hero-section/hero-section.component";
import { SecondSectionComponent } from "../../features/Collector/second-section/second-section.component";

@Component({
  selector: 'app-home-page',
  imports: [HeroSectionComponent, SecondSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
