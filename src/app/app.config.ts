import { ApplicationConfig, effect, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {provideStoreDevtools} from '@ngrx/store-devtools';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { reducers } from './core/Store/Reducers';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { AuthEffect } from './core/Auth/AuthEffect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideStore(reducers) , 
    provideEffects([AuthEffect]),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    })
  ]
};
