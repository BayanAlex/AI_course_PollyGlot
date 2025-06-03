import { createReducer, on } from "@ngrx/store";
import { addMessage, addMessageError, addMessageResponse } from "../actions/chat.actions";
import { Chat } from "../../models/chat.model";

const initialState: Chat = {
  loading: false,
  error: null,
  messages: []
};

export const chatReducer = createReducer(
  initialState,
  on(addMessage, (state, { message }) => ({
    ...state,
    messages: [
      ...state.messages,
      { id: (state.messages.length + 1).toString(), text: message, type: 'self' } as const
    ],
    loading: true,
    error: null
  })),
  on(addMessageResponse, (state, { message, language }) => ({
    ...state,
    messages: [
      ...state.messages,
      { id: (state.messages.length + 1).toString(), text: message, type: 'response', language } as const
    ],
    loading: false,
    error: null
  })),
  on(addMessageError, (state, { message }) => ({
    ...state,
    loading: false,
    messages: [
      ...state.messages,
      { id: (state.messages.length + 1).toString(), text: message, type: 'error' } as const
    ],
    error: message ?? 'An error occurred.'
  })),
  on(addMessageError, (state) => ({
    ...state,
    loading: false,
    error: null
  }))
);