import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Chat } from '../../models/chat.model';

export const selectChat = (state: { chat: Chat }) => state.chat;

export const chatSelector = createFeatureSelector<Chat>('chat');
export const messagesSelector = createSelector(chatSelector, (chat: Chat) => chat.messages);
export const chatLoadingSelector = createSelector(chatSelector, (chat: Chat) => chat.loading);
