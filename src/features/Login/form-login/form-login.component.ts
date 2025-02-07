import { Component } from '@angular/core';
import { FormLogoComponent } from "../../../shared/form-logo/form-logo.component";
import { ReactiveformComponent } from "../reactiveform/reactiveform.component";

@Component({
  selector: 'app-form-login',
  imports: [FormLogoComponent, ReactiveformComponent],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css'
})
export class FormLoginComponent {

}
