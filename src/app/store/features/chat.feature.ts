import { createFeature, createReducer, on } from "@ngrx/store";
import { Chat } from "../../models/chat.model";
import { addMessage, addMessageError, addMessageResponse } from "../actions/chat.actions";

const initialState: Chat = {
  loading: false,
  messages: []
};

export const chatFeature = createFeature({
  name: 'chat',
  reducer: createReducer(
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
  )
});

export const {
  reducer: chatReducer,
  selectChatState: chatSelector,
  selectLoading: chatLoadingSelector,
  selectMessages: messagesSelector
} = chatFeature;