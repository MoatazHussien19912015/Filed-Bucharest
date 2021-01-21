import { Action } from '@ngrx/store';
import { ICreditCard } from '../models/credit-card';
import { HttpErrorResponse } from '@angular/common/http';
 
export enum CreditCardActionTypes {
    GetCreditCardsLoad = '[CreditCard] Get CreditCards',
    GetCreditCardsSuccess = '[CreditCards] Get CreditCards Success',
    GetCreditCardsFail = '[CreditCards] Get CreditCards Fail',
    PostCreditCard = '[CreditCards] Post CreditCard',
    PostCreditCardSuccess = '[CreditCards] Post CreditCard Success',
    PostCreditCardFail = '[CreditCards] Post CreditCard Fail',
}
 
 
export class GetCreditCardsLoad implements Action {
    public readonly type = CreditCardActionTypes.GetCreditCardsLoad;
}
 
export class GetCreditCardsSuccess implements Action {
    public readonly type = CreditCardActionTypes.GetCreditCardsSuccess;
 
    constructor(public payload: ICreditCard[]) { }
}
 
export class GetCreditCardsFail implements Action {
    public readonly type = CreditCardActionTypes.GetCreditCardsFail;
 
    constructor(public error: HttpErrorResponse) { }
}
 
export class PostCreditCard implements Action {
    public readonly type = CreditCardActionTypes.PostCreditCard;
 
    constructor(public payload: ICreditCard) { }
}
 
export class PostCreditCardSuccess implements Action {
    public readonly type = CreditCardActionTypes.PostCreditCardSuccess;
 
    constructor(public payload: ICreditCard) { }
}
 
export class PostCreditCardFail implements Action {
    public readonly type = CreditCardActionTypes.PostCreditCardFail;
 
    constructor(public error: HttpErrorResponse) { }
}
 
export type CreditCardActions = 
GetCreditCardsLoad | GetCreditCardsSuccess | GetCreditCardsFail | PostCreditCard | PostCreditCardSuccess | PostCreditCardFail;