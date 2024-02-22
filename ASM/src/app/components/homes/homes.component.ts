import { Component } from '@angular/core';
import { Idproduct, discount, category } from '../entities/product';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { cart } from '../data/cart';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-homes',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './homes.component.html',
  styleUrl: './homes.component.css'
})
export class HomesComponent {
  // product: Idproduct[] = [
  //   {
  //     "id":1,
  //     "name": 'addidas New Hammer sole for Sports person',
  //     "price": 980,
  //     "description": '',
  //     "image": 'assets/img/product/p1.jpg',
  //     "favorite": 1,
  //     "oldprice": 1000,
  //     "category": 'ADIDAS',
  //     "discount": 10,
  //     "new": 'new'
  //   },
  //   {
  //     "id":2,
  //     "name": 'addidas New Hammer sole for Sports person',
  //     "price": 980,
  //     "description": '',
  //     "image": 'assets/img/product/p2.jpg',
  //     "favorite": 1,
  //     "oldprice": 1000,
  //     "category": 'ADIDAS',
  //     "discount": 10,
  //     "new": 'new'
  //   },
  //   {
  //     "id":3,
  //     "name": 'addidas New Hammer sole for Sports person',
  //     "price": 980,
  //     "description": '',
  //     "image": 'assets/img/product/p3.jpg',
  //     "favorite": 1,
  //     "oldprice": 1000,
  //     "category": 'ADIDAS',
  //     "discount": 10,
  //     "new": 'new'
  //   },
  //   {
  //     "id":4,
  //     "name": 'addidas New Hammer sole for Sports person',
  //     "price": 980,
  //     "description": '',
  //     "image": 'assets/img/product/p4.jpg',
  //     "favorite": 1,
  //     "oldprice": 1000,
  //     "category": 'ADIDAS',
  //     "discount": 10,
  //     "new": 'new'
  //   },
  //   {
  //     "id":5,
  //     "name": 'addidas New Hammer sole for Sports person',
  //     "price": 980,
  //     "description": '',
  //     "image": 'assets/img/product/p5.jpg',
  //     "favorite": 1,
  //     "oldprice": 1000,
  //     "category": 'ADIDAS',
  //     "discount": 10,
  //     "new": 'new'
  //   },
  //   {
  //     "id":6,
  //     "name": 'addidas New Hammer sole for Sports person',
  //     "price": 980,
  //     "description": '',
  //     "image": 'assets/img/product/p6.jpg',
  //     "favorite": 1,
  //     "oldprice": 1000,
  //     "category": 'ADIDAS',
  //     "discount": 10,
  //     "new": 'new'
  //   },
  //   {
  //     "id":7,
  //     "name": 'addidas New Hammer sole for Sports person',
  //     "price": 980,
  //     "description": '',
  //     "image": 'assets/img/product/p7.jpg',
  //     "favorite": 1,
  //     "oldprice": 1000,
  //     "category": 'ADIDAS',
  //     "discount": 10,
  //     "new": 'new'
  //   },
  //   {
  //     "id":8,
  //     "name": 'addidas New Hammer sole for Sports person',
  //     "price": 980,
  //     "description": '',
  //     "image": 'assets/img/product/p8.jpg',
  //     "favorite": 1,
  //     "oldprice": 1000,
  //     "category": 'ADIDAS',
  //     "discount": 10,
  //     "new": 'new'
  //   }
  // ]
  item:any;
  product: any = [];
  private cartKey = 'cart';

  constructor(private Productservice: ServiceService) { }
  ngOnInit() {
    this.Productservice.getProducts().subscribe((data: any) => {
      this.product = data;
    });
  }
  // cart:any = cart;
  addToCart(id:any) {
    console.log(id);
    let cart: any[] = JSON.parse(localStorage.getItem(this.cartKey) || '[]');
    const isExisting = cart.find((item: any) => item.id === id);
    if (isExisting) {
      alert("Sản phẩm đã có trong giỏ hàng");
    } else {
      const item = this.product.find((item: any) => item.id === id);
      cart.push({ ...item, quantity: 1 });
      localStorage.setItem(this.cartKey, JSON.stringify(cart));
      alert('Thêm thành công');
    }
    console.log(cart);
    
    // const isExisting = this.cart.find((item:any) => item.id == id);
    // if(isExisting){
    //   this.item = this.cart.find((item:any) => item.id === id);
    //   alert("Sản phẩm đã có trong giỏ hàng");
    // }else{
    //   this.item = this.product.find((item:any) => item.id == id);
    //     this.cart.push({...this.item, quantity: 1});
    //     alert('Thêm thành công');
    // }
  }

}
