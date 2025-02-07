import { Component } from '@angular/core';
import { AllDemandBarComponent } from "../../components/all-demand-bar/all-demand-bar.component";
import { DemandeContainerComponent } from "../../components/demande-container/demande-container.component";
import { DemandetoolbarComponent } from "../../components/demandetoolbar/demandetoolbar.component";

@Component({
  selector: 'app-recycle-page',
  imports: [AllDemandBarComponent, DemandeContainerComponent, DemandetoolbarComponent],
  templateUrl: './recycle-page.component.html',
  styleUrl: './recycle-page.component.css'
})
export class RecyclePageComponent {

}
