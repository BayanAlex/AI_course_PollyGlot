import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ChatService } from "../../services/chat.service";
import { addMessage, responseFailure, addMessageResponse, clearFailure } from "../actions/chat.actions";
import { catchError, map, of, switchMap } from "rxjs";
import { Language } from "../../models/language.model";
import { Store } from "@ngrx/store";
import { languageSelector } from "../selectors/language.selector";
import { tap, withLatestFrom } from "rxjs/operators";

@Injectable()
export class ChatEffects {
  getResponse$;
  showError$;

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
            map(response => addMessageResponse({ message: response, self: false })),
            catchError(error => of(responseFailure({ error })))
          )
        )
      )
    );

    this.showError$ = createEffect(() =>
      this.actions$.pipe(
        ofType(responseFailure),
        map(action => {
          alert(action.error);
          return clearFailure();
        })
      )
    );
  }

}
