import { createFeatureSelector } from '@ngrx/store';
import { Language } from '../../models/language.model';

export const selectLanguage = (state: { language: Language }) => state.language;

export const languageSelector = createFeatureSelector<Language>('language');