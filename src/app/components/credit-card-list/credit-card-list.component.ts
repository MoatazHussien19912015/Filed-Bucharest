import { Component, OnInit } from '@angular/core';
import { ICreditCard } from 'src/app/models/credit-card';
import { select, Store } from '@ngrx/store';
import * as fromCreditCards from "./../../store/index";
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit-card-list',
  templateUrl: './credit-card-list.component.html',
  styleUrls: ['./credit-card-list.component.scss']
})
export class CreditCardListComponent implements OnInit {

  creditCards: ICreditCard[] = [];
  public isLoading: boolean;
  constructor(private _store: Store<fromCreditCards.ICreditCardState>, private router: Router) {}
  ngOnInit(): void {
    this._store.dispatch(new fromCreditCards.GetCreditCardsLoad());
    const creditCards$ = this._store.pipe(select(fromCreditCards.allCreditCards));
 
    creditCards$.subscribe(res => {
      this.isLoading = res.isLoading;
      this.creditCards = res.creditCards;
      console.log(res);
    });

    
  }

  add_credit_card(){
    this.router.navigate(['/add-credit-card']);
  }

}
