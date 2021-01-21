import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICreditCard } from '../models/credit-card';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  constructor(private http: HttpClient) { }



  public getCreditCards(): Observable<ICreditCard[]> {
    return this.http.get<ICreditCard[]>('http://localhost:3000/credit_cards');
  }
  
  public postCreditCard(data): Observable<ICreditCard> {
    return this.http.post<ICreditCard>('http://localhost:3000/credit_cards', data);
  }
}
