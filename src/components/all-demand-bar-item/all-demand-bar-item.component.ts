import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-all-demand-bar-item',
  imports: [CommonModule],
  templateUrl: './all-demand-bar-item.component.html',
  styleUrl: './all-demand-bar-item.component.css'
})
export class AllDemandBarItemComponent {
  @Input() text!:string;
  @Input() active!:string;

  @Output() emmitchangement : EventEmitter<string> = new EventEmitter<string>();

  constructor(private store:Store){}

  changeTable() : void {
    this.emmitchangement.emit(this.text);
  }
} 
