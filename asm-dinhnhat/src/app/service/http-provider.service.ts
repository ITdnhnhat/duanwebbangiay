import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';
import { HttpClient } from '@angular/common/http';

var apiUrl = "http://localhost:3000";


@Injectable({
  providedIn: 'root'  
})
export class HttpProviderService {

  constructor(private HttpClient: HttpClient) { }
  getAlProducts() {
    return this.HttpClient.get(apiUrl + '/products');
  }
  getAllCart(){
    return this.HttpClient.get(apiUrl + '/order');
  }
  addProduct(product: any) {
    return this.HttpClient.post(apiUrl + '/products/', product);
  }

  deleteProduct(productId: any) {
    return this.HttpClient.delete(apiUrl + '/products/' + productId);
  }
  editProduct(productId: any) {
    return this.HttpClient.put(apiUrl + '/products/' + productId.id, productId);
  }

  getProductDetailById(productId: any) {
    return this.HttpClient.get(apiUrl + '/products/' + productId);
  }


}
