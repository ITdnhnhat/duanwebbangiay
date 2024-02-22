import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../service/http-provider.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  addProductForm: productForm = new productForm();
  productForm!: NgForm;

  constructor(private router: Router, private httpProvider: HttpProviderService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  isSubmitted: boolean = false;
  addProduct(product: any){
    this.isSubmitted = true;
    if(product){
    this.httpProvider.addProduct(this.addProductForm).subscribe(
      data => {
        if(data != null){
          this.toastr.success("Thêm sản phẩm thành công");
          setTimeout(() => {
            this.router.navigate(['/Home']);
          }, 500);
        }
    }
     )}

  }

}

export class productForm {
  category: string = '';
  name: string = '';
  price: string = '';
  discountPrice: string = '';
  image: string = '';
}
