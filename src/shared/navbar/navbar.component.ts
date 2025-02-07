import { Component, HostListener } from '@angular/core';
import { NavigationComponent } from "../navigation/navigation.component";
import {NgIcon, provideIcons} from '@ng-icons/core';
import {matRecycling , matLinkedCamera} from '@ng-icons/material-icons/baseline'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [NavigationComponent , CommonModule , NgIcon , RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  viewProviders:[provideIcons({matRecycling ,matLinkedCamera})]
})
export class NavbarComponent {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = scrollPosition > 0;
  }
}
