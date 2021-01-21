export interface ICreditCard {
    id: number;
    CreditCardNumber: string;
    Holder: string;
    ExpirationDate: Date;
    SecurityCode?: string;
    Amount: Number;
}
