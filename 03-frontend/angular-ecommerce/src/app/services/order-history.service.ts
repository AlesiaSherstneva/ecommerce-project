import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderHistory } from '../common/order-history';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {
  private orderUrl = environment.luv2shopApiUrl + '/orders';

  constructor(private httpClient: HttpClient) { }

  getOrderHistory(theEmail: string): Observable<GetResponceOrderHistory> {
    const orderHistoryUrl = `${this.orderUrl}/search/findByCustomerEmailOrderByDateCreatedDesc?email=${theEmail}`;
    return this.httpClient.get<GetResponceOrderHistory>(orderHistoryUrl);
  }
}

interface GetResponceOrderHistory {
  _embedded: {
    orders: OrderHistory[];
  }
}