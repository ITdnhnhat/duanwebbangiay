import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../service/http-provider.service';
import { Input } from '@angular/core';
import { Product } from '../product';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  editProductForm: productForm = new productForm();

  @ViewChild('productForm')
  productForm!: NgForm;

  isSubmitted: boolean = false;
  productId: any;

  public productList: Product = {
    
    category: '',
    name: '',
    price: '',
    discountPrice: '',
    image: '',
  };
  id = '';

  constructor(
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private httpProvider: HttpProviderService
  ) {}
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['productId'];
    console.log(this.id);
    
    this.getById(this.id);
  }

  getById(id:any) {
    this.httpProvider.getProductDetailById(id).subscribe((data) => {
      console.log(data);
      this.productList = data as any;
    });
  }
  update(product: any) {
    this.isSubmitted = true;
    if (product) {
      this.httpProvider.editProduct(this.productList).subscribe({
        next: (data) => {
          this.toastr.success('Sửa Sản Phẩm Thành Công');
          setTimeout(() => {
            this.router.navigate(['/Home']);
          }, 500);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}

export class productForm {
  category: string = '';
  name: string = '';
  price: string = '';
  discountPrice: string = '';
  image: string = '';
}
