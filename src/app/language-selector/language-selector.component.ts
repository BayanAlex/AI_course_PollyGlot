import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { Language } from '../types/language';

@Component({
  selector: 'app-language-selector',
  imports: [],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageSelectorComponent {
  languages: Language[];
  selectedLanguage: Signal<Language>;

  constructor(
    private languageService: LanguageService
  ) {
    this.languages = this.languageService.languages;
    this.selectedLanguage = this.languageService.selectedLanguage;
  }

  selectLanguage(language: Language) {
    this.languageService.selectedLanguage.set(language);
  }
}
