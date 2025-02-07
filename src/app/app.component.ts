import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoadDemands } from './core/Demands/actions/DemandAction';
import { LoadLoggedUser } from './core/Auth/AuthAction';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RecycleHub';
  constructor(private store:Store){
    this.store.dispatch(LoadDemands());
    this.store.dispatch(LoadLoggedUser());
  }
}
