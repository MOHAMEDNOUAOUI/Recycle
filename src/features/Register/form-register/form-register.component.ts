import { Component } from '@angular/core';
import { FormLogoComponent } from "../../../shared/form-logo/form-logo.component";
import { ReactiveFormComponent } from "../reactive-form/reactive-form.component";

@Component({
  selector: 'app-form-register',
  imports: [FormLogoComponent, ReactiveFormComponent],
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css'
})
export class FormRegisterComponent {

}
