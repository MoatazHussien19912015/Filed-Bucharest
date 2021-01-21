import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ICreditCardState } from ".";
 
const getCreditCardState = createFeatureSelector<ICreditCardState>('creditcards');
 
export const allCreditCards = createSelector(getCreditCardState, (state: ICreditCardState) => {
    return state;
});
 
/* export const firstTenCreditCards = createSelector(getCreditCardState, (state: ICreditCardState) => {
    const creditCards = state.creditCards.slice(0, 10);
    return { ...state, data: creditCards };
}); */