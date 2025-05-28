import { createReducer, on } from "@ngrx/store";
import { selectLanguage } from "../actions/language.actions";
import { languages } from "../../languages.config";

const initialState = languages[0];

export const languageReducer = createReducer(
  initialState,
  on(selectLanguage, (_state, { language }) => language)
);