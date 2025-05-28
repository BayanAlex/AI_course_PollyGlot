import { Injectable } from '@angular/core';
import { languages } from '../languages.config'

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  readonly languages = languages;
}
