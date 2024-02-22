import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpProviderService } from '../service/http-provider.service';
import { WebApiService } from '../service/web-api.service';
import { Product } from '../product';
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {

  productId: any;
  productDetail : any= [];
  
  public productList: Product = {
    category: '',
    name: '',
    price: '',
    discountPrice: '',
    image: '',
  };
  id = '';
  constructor(public webApiService: WebApiService, private route: ActivatedRoute, private httpProvider : HttpProviderService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['productId'];
    this.getById(this.id);
  }

  getById(id:any) {
    this.httpProvider.getProductDetailById(id).subscribe((data) => {
      console.log(data);
      this.productList = data as any;
      console.log(this.productList);
      
    });
  }

}
