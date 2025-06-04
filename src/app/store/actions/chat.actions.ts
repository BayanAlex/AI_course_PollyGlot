import { createActionGroup, props } from "@ngrx/store";

export const MessageActions = createActionGroup({
  source: 'Chat Message',
  events: {
    addMessage: props<{ message: string }>(),
    addMessageResponse: props<{ message: string, language: string }>(),
    addMessageError: props<{ message: string }>(),
  }
});

export const {
  addMessage,
  addMessageResponse,
  addMessageError
} = MessageActions;