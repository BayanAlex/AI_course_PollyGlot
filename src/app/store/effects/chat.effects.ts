import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ChatService } from "../../services/chat.service";
import { addMessage, addMessageError, addMessageResponse } from "../actions/chat.actions";
import { catchError, map, of, switchMap } from "rxjs";
import { Language } from "../../models/language.model";
import { Store } from "@ngrx/store";
import { withLatestFrom } from "rxjs/operators";
import { languageSelector } from "../features/language.feature";

@Injectable()
export class ChatEffects {
  getResponse$;

  constructor(
    private actions$: Actions,
    private chatService: ChatService,
    private store: Store<{ language: Language }>,
  ) {
    this.getResponse$ = createEffect(() =>
      this.actions$.pipe(
        ofType(addMessage),
        withLatestFrom(this.store.select(languageSelector)),
        switchMap(([action, language]) =>
          this.chatService.sendMessage(action.message, language.name).pipe(
            map(response => addMessageResponse({ message: response, language: language.name })),
            catchError(message => of(addMessageError({ message })))
          )
        )
      )
    );
  }

}
