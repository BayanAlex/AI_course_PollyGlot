import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { languageReducer } from './store/reducers/language.reducer';
import { chatReducer } from './store/reducers/chat.reducer';
import { provideEffects } from '@ngrx/effects';
import { ChatEffects } from './store/effects/chat.effects';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ language: languageReducer, chat: chatReducer }),
    provideEffects(ChatEffects),
    provideHttpClient()
  ]
};
