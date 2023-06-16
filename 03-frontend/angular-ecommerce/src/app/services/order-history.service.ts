import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderHistory } from '../common/order-history';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {
  private orderUrl = 'http://localhost:8080/api/orders';

  constructor(private httpClient: HttpClient) { }

  getOrderHistory(theEmail: string): Observable<GetResponceOrderHistory> {
    const orderHistoryUrl = `${this.orderUrl}/search/findByCustomerEmail?email=${theEmail}`;
    return this.httpClient.get<GetResponceOrderHistory>(orderHistoryUrl);
  }
}

interface GetResponceOrderHistory {
  _embedded: {
    orders: OrderHistory[];
  }
}