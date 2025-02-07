import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileNavComponent } from "../../shared/profile-nav/profile-nav.component";

@Component({
  selector: 'app-profile-layout',
  imports: [RouterModule, CommonModule],
  templateUrl: './profile-layout.component.html',
  styleUrl: './profile-layout.component.css'
})
export class ProfileLayoutComponent {

}
