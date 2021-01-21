import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ICreditCard } from 'src/app/models/credit-card';
import { CreditCardService } from 'src/app/services/credit-card.service';
import { Router } from '@angular/router';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {
  notification: boolean = false;
  form: FormGroup = new FormGroup({
    CreditCardNumber: new FormControl('', [Validators.required, Validators.minLength(14), Validators.maxLength(14)]),
    Holder: new FormControl('', [ Validators.required, Validators.minLength(3)]),
    ExpirationDate: new FormControl('', [ Validators.required, CustomValidators.outdated ]),
    SecurityCode: new FormControl('', [  Validators.maxLength(3), Validators.minLength(3)]),
    Amount: new FormControl('', [ Validators.required, Validators.min(1)]),
  
  });

  constructor(private service: CreditCardService, private router: Router) { }

  ngOnInit(): void {
  }

  get Form() {
    return this.form;
  }
  get CreditCardNumber() { 
    return this.form.get('CreditCardNumber') ;
  }
  get Holder() {
    return this.form.get('Holder');
  }
  get ExpirationDate() {
    return this.form.get('ExpirationDate');
  }
  get SecurityCode() {
    return this.form.get('SecurityCode');
  }
  get Amount() {
    return this.form.get('Amount');
  }
  

  show() {
    this.notification = true;
    setTimeout(() => {
      this.notification = false;
      this.router.navigate(['/credit-cards']);
    }, 3000);

  }

  add_card() {
    
    const card:ICreditCard = { id: Math.ceil(1000*Math.random()) , CreditCardNumber: this.CreditCardNumber?.value, 
      Holder: this.Holder?.value.toString().toUpperCase(), ExpirationDate: new Date(this.ExpirationDate?.value), SecurityCode: this.SecurityCode?.value, 
      Amount: this.Amount?.value  };
      this.service.postCreditCard(card)
      .subscribe(x=> {
        this.form.reset();
        this.show();
      });

  
    }
}
