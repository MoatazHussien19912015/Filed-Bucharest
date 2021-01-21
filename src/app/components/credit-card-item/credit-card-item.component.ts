import { Component, OnInit, Input } from '@angular/core';
import { ICreditCard } from 'src/app/models/credit-card';

@Component({
  selector: 'app-credit-card-item',
  templateUrl: './credit-card-item.component.html',
  styleUrls: ['./credit-card-item.component.scss']
})
export class CreditCardItemComponent implements OnInit {


  @Input() creditCard: ICreditCard;
  constructor() { }

  ngOnInit(): void {
    
  }

}
