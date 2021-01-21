import { ICreditCard } from '../models/credit-card';
import { CreditCardActions, CreditCardActionTypes } from './actions';
 
 
export interface ICreditCardState {
    creditCards: ICreditCard[];
    isLoading: boolean;
    message: string;
}
 
const initialState: ICreditCardState = {
    creditCards: [],
    isLoading: false,
    message: ''
};
 
export function reducer(state = initialState, action: CreditCardActions): ICreditCardState {
 
    switch (action.type) {
        case CreditCardActionTypes.GetCreditCardsLoad: {
            return {
                ...state,
                isLoading: true
            }
        }
 
        case CreditCardActionTypes.GetCreditCardsSuccess: {
            return {
                ...state,
                creditCards: action.payload,
                isLoading: false,
                message: 'Data fetch Successfully!'
            }
        }
        case CreditCardActionTypes.GetCreditCardsFail: {
            return {
                creditCards: [],
                isLoading: false,
                message: 'Something went wrong!'
            }
        }
        case CreditCardActionTypes.PostCreditCard: {
            return {
                ...state,
                isLoading: true
            }
        }
 
        case CreditCardActionTypes.PostCreditCardSuccess: {
            const updatedData = [...state['data']];
            updatedData.push(action.payload);
            return {
                ...state,
                creditCards: updatedData,
                isLoading: false,
                message: 'Data posted Successfully!'
            }
        }
        case CreditCardActionTypes.PostCreditCardFail: {
            return {
                creditCards: [],
                isLoading: false,
                message: 'Something went wrong!'
            }
        }
        default: {
            return state;
        }
    }
}