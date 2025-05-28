import { createAction, props } from "@ngrx/store";

export const ADD_MESSAGE = '[Chat Message] Add';
export const ADD_MESSAGE_RESPONSE = '[Chat Message] Add Response';
export const RESPONSE_FAILURE = '[Chat Message] Failure';
export const CLEAR_FAILURE = '[Chat Message] Clear Failure';

export const addMessage = createAction(
  ADD_MESSAGE,
  props<{ message: string, self: boolean }>()
);

export const addMessageResponse = createAction(
  ADD_MESSAGE_RESPONSE,
  props<{ message: string, self: boolean }>()
);

export const responseFailure = createAction(
  RESPONSE_FAILURE,
  props<{ error: string }>()
);

export const clearFailure = createAction(
  CLEAR_FAILURE
);