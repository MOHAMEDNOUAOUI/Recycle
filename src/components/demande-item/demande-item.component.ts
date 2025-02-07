import { Component, Input } from '@angular/core';
import { Demande, Statut } from '../../app/core/models/demande.model';

@Component({
  selector: 'app-demande-item',
  imports: [],
  templateUrl: './demande-item.component.html',
  styleUrl: './demande-item.component.css'
})
export class DemandeItemComponent {
@Input() demande!:Demande
Statut = Statut;
}
