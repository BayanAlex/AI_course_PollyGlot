import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { Language } from '../models/language.model';
import { Store } from '@ngrx/store';
import { selectLanguage } from '../store/actions/language.actions';
import { languageSelector } from '../store/selectors/language.selector';

@Component({
  selector: 'app-language-selector',
  imports: [],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageSelectorComponent {
  readonly languages: Readonly<Language[]>;
  selectedLanguage: Signal<Language>;

  constructor(
    private languageService: LanguageService,
    private store: Store<{ language: Language }>
  ) {
    this.languages = this.languageService.languages;
    this.selectedLanguage = this.store.selectSignal(languageSelector);
  }

  selectLanguage(language: Language) {
    this.store.dispatch(selectLanguage({ language }));
  }
}
