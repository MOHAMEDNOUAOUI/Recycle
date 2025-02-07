import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {matRecycling } from '@ng-icons/material-icons/baseline'

@Component({
  selector: 'app-form-logo',
  imports: [NgIcon],
  templateUrl: './form-logo.component.html',
  styleUrl: './form-logo.component.css',
  viewProviders:[provideIcons({matRecycling})]
})
export class FormLogoComponent {

}
