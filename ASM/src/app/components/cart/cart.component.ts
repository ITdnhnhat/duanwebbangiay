import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  item: any;
  cart: any[];

  subtotal: number = 0;
  checkoutForm!: NgForm;
  addOrderForm!: NgForm;
  isSubmitted = false;
  myForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required,Validators.pattern('^[0-9]*$')]),
    location: new FormControl('',[Validators.required]),
  });
  http: any;
  
  onSubmit() {
    const newproduct = {
      name: this.myForm.value.name,
      phone: this.myForm.value.phone,
      location: this.myForm.value.location,
      cart: this.cart
    };
    this.service.postCart(newproduct).subscribe((data) => {
      console.log(data);
      localStorage.clear();
      this.myForm.reset();
      this.cart = [];
      this.calculateSubtotal();
    });
  }
  

  constructor(private service: ServiceService) {
    if (typeof window !== 'undefined') {
      this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
    } else {
      this.cart = [];
    }
  }

  ngOnInit(): void {
    this.calculateSubtotal();
  }

  plus(id: any) {
    this.item = this.cart.find((item: any) => item.id === id);
    this.item.quantity++;

    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }

    this.calculateSubtotal();
  }

  minus(id: any) {
    this.item = this.cart.find((item: any) => item.id === id);
    this.item.quantity--;

    if (this.item.quantity <= 0) {
      const confirmDelete = confirm("Bạn có muốn xóa sản phẩm này không?");
      if (confirmDelete) {
        this.cart = this.cart.filter((item: any) => item.id !== id);

        if (typeof window !== 'undefined') {
          localStorage.setItem('cart', JSON.stringify(this.cart));
        }
      } else {
        this.item.quantity = 1;
      }
    }
    this.calculateSubtotal();
  }
  addOrder(form: NgForm) {
    this.isSubmitted = true;
  }
  private calculateSubtotal() {
    this.subtotal = this.cart.reduce((total: number, item: { quantity: number; price: number; }) => total + item.quantity * item.price, 0);
  }
  
}
