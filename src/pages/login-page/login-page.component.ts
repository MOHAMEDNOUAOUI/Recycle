import { Component } from '@angular/core';
import { FormLoginComponent } from "../../features/Login/form-login/form-login.component";

@Component({
  selector: 'app-login-page',
  imports: [FormLoginComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}
