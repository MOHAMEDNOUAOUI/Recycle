import { Component } from '@angular/core';
import { AllDemandBarItemComponent } from "../all-demand-bar-item/all-demand-bar-item.component";
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { LoadDemands } from '../../app/core/Demands/actions/DemandAction';

@Component({
  selector: 'app-all-demand-bar',
  imports: [AllDemandBarItemComponent , CommonModule],
  templateUrl: './all-demand-bar.component.html',
  styleUrl: './all-demand-bar.component.css'
})
export class AllDemandBarComponent {
  active : string = "All Demandes";

  constructor(private store:Store){
    store.dispatch(LoadDemands());
  }

  setActive(type : string) : void {
    this.active = type;
  }


}
