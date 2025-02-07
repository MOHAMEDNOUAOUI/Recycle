import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Demande, Statut } from '../../app/core/models/demande.model';
import { LoadDemands } from '../../app/core/Demands/actions/DemandAction';
import { selectDemandes } from '../../app/core/Demands/selectors/DemandeSelector';
import { CommonModule } from '@angular/common';
import { DemandeItemComponent } from "../demande-item/demande-item.component";

@Component({
  selector: 'app-demande-container',
  imports: [CommonModule, DemandeItemComponent],
  templateUrl: './demande-container.component.html',
  styleUrl: './demande-container.component.css'
})
export class DemandeContainerComponent implements OnInit {
  Demandes$?:Observable<Demande[]>;
  Statut = Statut;

  constructor(private store:Store){}

  ngOnInit(): void {
    this.Demandes$ = this.store.select(selectDemandes);
  }

  color(statut:number): string {
    switch (statut) {
      case 0: return 'bg-yellow-300';
      case 1: return 'bg-gray-400';
      case 2: return 'bg-orange-400';
      case 3: return 'bg-green-500';
      case 4: return 'bg-red-500';
      default: return 'bg-blue-300';
    }
  }


}
