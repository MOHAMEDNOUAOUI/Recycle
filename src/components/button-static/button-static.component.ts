import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Open } from '../../app/core/Recycle/actions/RecycleAction';

@Component({
  selector: 'app-button-static',
  imports: [],
  templateUrl: './button-static.component.html',
  styleUrl: './button-static.component.css'
})
export class ButtonStaticComponent {
  @Input() text!:string;

  constructor(private store:Store){}

  openLayout() {
    this.store.dispatch(Open());
  }
}
