import { createReducer, on } from "@ngrx/store";
import { addMessage, addMessageError, addMessageResponse } from "../actions/chat.actions";
import { Chat } from "../../models/chat.model";

const initialState: Chat = {
  loading: false,
  messages: []
};

export const chatReducer = createReducer(
  initialState,
  on(addMessage, (state, { message }) => ({
    ...state,
    loading: true,
    messages: [
      ...state.messages,
      { id: (state.messages.length + 1).toString(), text: message, type: 'self' } as const
    ]
  })),
  on(addMessageResponse, (state, { message, language }) => ({
    ...state,
    loading: false,
    messages: [
      ...state.messages,
      { id: (state.messages.length + 1).toString(), text: message, type: 'response', language } as const
    ]
  })),
  on(addMessageError, (state, { message }) => ({
    ...state,
    loading: false,
    messages: [
      ...state.messages,
      { id: (state.messages.length + 1).toString(), text: message, type: 'error' } as const
    ]
  }))
);