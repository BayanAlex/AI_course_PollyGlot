import { Injectable, signal } from '@angular/core';
import { Language } from '../types/language';
import { languages } from '../languages.config'

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  readonly languages = languages;
  selectedLanguage = signal<Language>(languages[0]);
}
