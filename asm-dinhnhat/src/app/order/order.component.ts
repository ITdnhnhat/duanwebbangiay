import { HttpClient } from '@angular/common/http';
import { HttpProviderService } from '../service/http-provider.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orderList: any = [];
  constructor(
    private httpProvider: HttpProviderService, private HttpClient: HttpClient) { }

  ngOnInit(): void {
    this.orderList = this.getAllCart();
  }
 

  getAllCart() {
      this.httpProvider.getAllCart().subscribe(
      data => this.orderList = data
      );
    }
}
