import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { CreditCardService } from '../services/credit-card.service';
import { Action } from '@ngrx/store';
import * as fromCreditCards from '.';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ICreditCard } from '../models/credit-card';
 
@Injectable()
export class CreditCardsEffects {
 
    constructor(private actions$: Actions,
        private creditCardService: CreditCardService) {
    }
 
    @Effect()
    getCreditCards$: Observable<Action> = this.actions$.pipe(
        ofType(fromCreditCards.CreditCardActionTypes.GetCreditCardsLoad),
        mergeMap(() =>
            this.creditCardService.getCreditCards().pipe(
                map((creditCard: ICreditCard[]) => {
                    return new fromCreditCards.GetCreditCardsSuccess(creditCard);
                }),
                catchError((error) =>
                    of(new fromCreditCards.GetCreditCardsFail(error)))
            )
        ));
 
    @Effect()
    postCreditCard$: Observable<Action> = this.actions$.pipe(
        ofType(fromCreditCards.CreditCardActionTypes.PostCreditCard),
        map((action: fromCreditCards.PostCreditCard) => action.payload),
        mergeMap((creditCard: ICreditCard) =>
            this.creditCardService.postCreditCard(creditCard).pipe(
                map((user: ICreditCard) => {
                    return new fromCreditCards.PostCreditCardSuccess(user);
                }),
                catchError((error) =>
                    of(new fromCreditCards.PostCreditCardFail(error)))
            )
        ));
}