import { Component } from '@angular/core';
import { NavbarItemsComponent } from "../navbar-items/navbar-items.component";
import {NgIcon, provideIcons} from '@ng-icons/core';
import {matRecycling , matLinkedCamera} from '@ng-icons/material-icons/baseline'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [NavbarItemsComponent , NgIcon, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
  viewProviders:[provideIcons({matRecycling})]
})
export class NavigationComponent {

}
