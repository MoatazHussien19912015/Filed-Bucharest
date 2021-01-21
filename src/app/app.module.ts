import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { CreditCardsEffects } from './store/effects';
import { reducer } from './../app/store/reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { CreditCardItemComponent } from './components/credit-card-item/credit-card-item.component';
import { CreditCardListComponent } from './components/credit-card-list/credit-card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreditCardComponent,
    CreditCardItemComponent,
    CreditCardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule , ReactiveFormsModule, StoreModule.forRoot({creditcards: reducer}), StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([CreditCardsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
