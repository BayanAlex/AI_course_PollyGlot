import { createAction, props } from "@ngrx/store";
import { Language } from "../../models/language.model";

export const SELECT_LANGUAGE = '[Language] Select';

export const selectLanguage = createAction(
  SELECT_LANGUAGE,
  props<{ language: Language }>()
);
