import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-all-demand-bar-item',
  imports: [],
  templateUrl: './all-demand-bar-item.component.html',
  styleUrl: './all-demand-bar-item.component.css'
})
export class AllDemandBarItemComponent {
  @Input() text!:string;

  constructor(private store:Store){}

  ClickOnType(type:string) : void {

  }
} 
