import { createReducer, on } from "@ngrx/store";
import { addMessage, responseFailure, addMessageResponse } from "../actions/chat.actions";
import { Chat } from "../../models/chat.model";

const initialState: Chat = {
  loading: false,
  error: null,
  messages: []
};

export const chatReducer = createReducer(
  initialState,
  on(addMessage, (state, { message, self }) => ({
    ...state,
    messages: [
      ...state.messages,
      { id: (state.messages.length + 1).toString(), text: message, self }
    ],
    loading: true,
    error: null
  })),
  on(addMessageResponse, (state, { message, self }) => ({
    ...state,
    messages: [
      ...state.messages,
      { id: (state.messages.length + 1).toString(), text: message, self }
    ],
    loading: false,
    error: null
  })),
  on(responseFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error ?? 'An error occurred.'
  })),
  on(responseFailure, (state) => ({
    ...state,
    loading: false,
    error: null
  }))
);