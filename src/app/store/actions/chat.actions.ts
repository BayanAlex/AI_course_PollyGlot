import { createAction, props } from "@ngrx/store";

export const ADD_MESSAGE = '[Chat Message] Add';
export const ADD_MESSAGE_RESPONSE = '[Chat Message] Add Response';
export const ADD_MESSAGE_ERROR = '[Chat Message] Failure';
export const CLEAR_FAILURE = '[Chat Message] Clear Failure';

export const addMessage = createAction(
  ADD_MESSAGE,
  props<{ message: string }>()
);

export const addMessageResponse = createAction(
  ADD_MESSAGE_RESPONSE,
  props<{ message: string, language: string }>()
);

export const addMessageError = createAction(
  ADD_MESSAGE_ERROR,
  props<{ message: string }>()
);
