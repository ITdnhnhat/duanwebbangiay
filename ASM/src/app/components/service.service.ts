import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { get } from 'http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  api = 'http://localhost:3000/products';
  apiCart = 'http://localhost:3000/order';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any>{
    return this.http.get(this.api);
  }
  getProduct(id: number): Observable<any>{
    return this.http.get(`${this.api}/${id}`);
  }
  postCart(cart: any): Observable<any>{
    return this.http.post(this.apiCart, cart);
  }
  
}
