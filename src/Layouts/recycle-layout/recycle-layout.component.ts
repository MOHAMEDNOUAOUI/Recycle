import { Component } from '@angular/core';
import { RecyclePageComponent } from "../../pages/recycle-page/recycle-page.component";
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matClose } from '@ng-icons/material-icons/baseline';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Close } from '../../app/core/Recycle/actions/RecycleAction';

@Component({
  selector: 'app-recycle-layout',
  imports: [RecyclePageComponent , NgIcon , CommonModule],
  templateUrl: './recycle-layout.component.html',
  styleUrl: './recycle-layout.component.css',
  viewProviders:[provideIcons({matClose})]
})
export class RecycleLayoutComponent {
  constructor(private store:Store){}

  close() : void {
    this.store.dispatch(Close());
  }
}
