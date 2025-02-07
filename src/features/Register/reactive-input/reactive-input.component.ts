import { Component, forwardRef, Input } from '@angular/core';

@Component({
  selector: 'app-reactive-input',
  imports: [],
  templateUrl: './reactive-input.component.html',
  styleUrl: './reactive-input.component.css',
})
export class ReactiveInputComponent{
  @Input() type!:string;
  @Input() text!:string;

  onInput(event: any): void {
    const value = event.target.value;
  }
  
}
