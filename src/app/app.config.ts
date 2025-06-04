import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { ChatEffects } from './store/effects/chat.effects';
import { provideHttpClient } from '@angular/common/http';
import { chatFeature } from './store/features/chat.feature';
import { languageFeature } from './store/features/language.feature';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(),
    provideState(chatFeature),
    provideState(languageFeature),
    provideEffects(ChatEffects),
    provideHttpClient()
  ]
};
