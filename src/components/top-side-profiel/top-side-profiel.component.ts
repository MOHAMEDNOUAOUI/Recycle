import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Utilisateur } from '../../app/core/models/Utilisateur.model';
import { LoggedUser } from '../../app/core/Auth/AuthSelector';
import { LoadLoggedUser } from '../../app/core/Auth/AuthAction';

@Component({
  selector: 'app-top-side-profiel',
  imports: [],
  templateUrl: './top-side-profiel.component.html',
  styleUrl: './top-side-profiel.component.css'
})
export class TopSideProfielComponent implements OnInit {
  profile!:Utilisateur |null;
  constructor(private store:Store){
    this.store.dispatch(LoadLoggedUser());
  }

  ngOnInit() : void {
    this.store.select(LoggedUser).subscribe((user) => {
      console.log(user);
    })
  }

}
