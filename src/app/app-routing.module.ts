import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { CreditCardItemComponent } from './components/credit-card-item/credit-card-item.component';
import { CreditCardListComponent } from './components/credit-card-list/credit-card-list.component';

const routes: Routes = [{path: 'add-credit-card', component: CreditCardComponent}, {path: 'credit-cards', component: CreditCardListComponent},
                  {path: '**', component: CreditCardListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
