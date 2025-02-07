import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RecycleLayoutComponent } from "../recycle-layout/recycle-layout.component";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsComponentVisible } from '../../app/core/Recycle/selectors/RecycleSelector';

@Component({
  selector: 'app-collector-layout',
  imports: [NavbarComponent, FooterComponent, RouterOutlet, CommonModule, RecycleLayoutComponent],
  templateUrl: './collector-layout.component.html',
  styleUrl: './collector-layout.component.css'
})
export class CollectorLayoutComponent {
  isComponentVisible$: Observable<boolean>;

  constructor(private store:Store){
    this.isComponentVisible$ = this.store.select(selectIsComponentVisible);
  }

  ngOnInit() {
    this.isComponentVisible$ = this.store.select(selectIsComponentVisible);
    this.isComponentVisible$.subscribe(isVisible => {
      if (isVisible) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    });
  }
}
