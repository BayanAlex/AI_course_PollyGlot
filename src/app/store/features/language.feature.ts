import { createFeature, createReducer, on } from "@ngrx/store";
import { selectLanguage } from "../actions/language.actions";
import { languages } from "../../languages.config";

const initialState = languages[0];

export const languageFeature = createFeature({
  name: 'language',
  reducer: createReducer(
    initialState,
    on(selectLanguage, (_state, { language }) => language)
  )
});

export const {
  reducer: languageReducer,
  selectLanguageState: languageSelector
} = languageFeature;