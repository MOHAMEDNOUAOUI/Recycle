import { Inject, inject } from '@angular/core';
import { CanActivateFn , Router} from '@angular/router';
import { AuthService } from '../Auth/AuthService';
import { Store } from '@ngrx/store';
import { LoadLoggedUser } from '../Auth/AuthAction';
import { LoggedUser, Role } from '../Auth/AuthSelector';
import { Statut } from '../models/demande.model';
import { map, tap } from 'rxjs';

export const authGuard: CanActivateFn = (route,state) => {
  const authService = inject(AuthService);
  const router = inject(Router);


  if(authService.isAuthenticated()){
    return true;
  }else{
    router.navigate(['/login']);
    return false;
  }
};

export const collectorGuard: CanActivateFn = (route, state) => {
  return true;
};