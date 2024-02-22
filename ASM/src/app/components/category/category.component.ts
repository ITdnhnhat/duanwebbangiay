import { Component, OnInit } from '@angular/core';
import { Idproduct } from '../entities/product';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit{
  
  // product: Idproduct[] = [
  //   {
  //     "id":1,
  //     "name": 'nike 1',
  //     "price": 981,
  //     "description": '',
  //     "image": 'assets/img/product/p1.jpg',
  //     "favorite": 1,
  //     "oldprice": 1000,
  //     "category": 'NIKE',
  //     "discount": 1,
  //     "new": 'new'
  //   },
  //   {
  //     "id":2,
  //     "name": 'PUMA 1',
  //     "price": 982,
  //     "description": '',
  //     "image": 'assets/img/product/p2.jpg',
  //     "favorite": 1,
  //     "oldprice": 1000,
  //     "category": 'PUMA',
  //     "discount": 10,
  //     "new": 'new'
  //   },
  //   {
  //     "id":3,
  //     "name": 'addidas New Hammer sole for Sports person',
  //     "price": 983,
  //     "description": '',
  //     "image": 'assets/img/product/p3.jpg',
  //     "favorite": 1,
  //     "oldprice": 1000,
  //     "category": 'ADIDAS',
  //     "discount": 1,
  //     "new": 'new'
  //   },
  //   {
  //     "id":4,
  //     "name": 'addidas 2',
  //     "price": 984,
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
  //     "name": 'PUMA 2',
  //     "price": 985,
  //     "description": '',
  //     "image": 'assets/img/product/p5.jpg',
  //     "favorite": 1,
  //     "oldprice": 1000,
  //     "category": 'PUMA',
  //     "discount": 0,
  //     "new": 'new'
  //   },
  //   {
  //     "id":6,
  //     "name": 'addidas 3',
  //     "price": 986,
  //     "description": '',
  //     "image": 'assets/img/product/p6.jpg',
  //     "favorite": 1,
  //     "oldprice": 1000,
  //     "category": 'ADIDAS',
  //     "discount": 0,
  //     "new": 'new'
  //   },
  //   {
  //     "id":7,
  //     "name": 'NIKE',
  //     "price": 987,
  //     "description": '',
  //     "image": 'assets/img/product/p7.jpg',
  //     "favorite": 1,
  //     "oldprice": 1000,
  //     "category": 'NIKE',
  //     "discount": 1,
  //     "new": 'new'
  //   },
  //   {
  //     "id":8,
  //     "name": 'addidas',
  //     "price": 988,
  //     "description": '',
  //     "image": 'assets/img/product/p8.jpg',
  //     "favorite": 1,
  //     "oldprice": 1000,
  //     "category": 'ADIDAS',
  //     "discount": 0,
  //     "new": 'new'
  //   },
  //   {
  //     "id":9,
  //     "name": 'nike ',
  //     "price": 981,
  //     "description": '',
  //     "image": 'assets/img/product/p1.jpg',
  //     "favorite": 1,
  //     "oldprice": 1000,
  //     "category": 'NIKE',
  //     "discount": 1,
  //     "new": 'new'
  //   },
  //   {
  //     "id":10,
  //     "name": 'PUMA',
  //     "price": 982,
  //     "description": '',
  //     "image": 'assets/img/product/p2.jpg',
  //     "favorite": 1,
  //     "oldprice": 1000,
  //     "category": 'PUMA',
  //     "discount": 10,
  //     "new": 'new'
  //   },
  //   {
  //     "id":11,
  //     "name": 'addidas ',
  //     "price": 983,
  //     "description": '',
  //     "image": 'assets/img/product/p3.jpg',
  //     "favorite": 1,
  //     "oldprice": 1000,
  //     "category": 'ADIDAS',
  //     "discount": 1,
  //     "new": 'new'
  //   },
  //   {
  //     "id":12,
  //     "name": 'addidas',
  //     "price": 984,
  //     "description": '',
  //     "image": 'assets/img/product/p4.jpg',
  //     "favorite": 1,
  //     "oldprice": 1000,
  //     "category": 'ADIDAS',
  //     "discount": 10,
  //     "new": 'new'
  //   },
  //   {
  //     "id":13,
  //     "name": 'PUMA',
  //     "price": 985,
  //     "description": '',
  //     "image": 'assets/img/product/p5.jpg',
  //     "favorite": 1,
  //     "oldprice": 1000,
  //     "category": 'PUMA',
  //     "discount": 0,
  //     "new": 'new'
  //   },
  //   {
  //     "id":14,
  //     "name": 'addidas',
  //     "price": 986,
  //     "description": '',
  //     "image": 'assets/img/product/p6.jpg',
  //     "favorite": 1,
  //     "oldprice": 1000,
  //     "category": 'ADIDAS',
  //     "discount": 0,
  //     "new": 'new'
  //   },
  //   {
  //     "id":15,
  //     "name": 'addidas',
  //     "price": 987,
  //     "description": '',
  //     "image": 'assets/img/product/p7.jpg',
  //     "favorite": 1,
  //     "oldprice": 1000,
  //     "category": 'NIKE',
  //     "discount": 1,
  //     "new": 'new'
  //   },
  //   {
  //     "id":16,
  //     "name": 'addidas',
  //     "price": 988,
  //     "description": '',
  //     "image": 'assets/img/product/p8.jpg',
  //     "favorite": 1,
  //     "oldprice": 1000,
  //     "category": 'ADIDAS',
  //     "discount": 0,
  //     "new": 'new'
  //   }
  // ];
  product:any = [];
  listproduct:any = [];
  showDiscountedProducts: boolean = false;
  currentPage: number = 1;
  soluong: number = 6;
  _litstFilter!: string;

  constructor(private productService: ServiceService) { }
  
  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.listproduct = data;
      this.product = data;
    }
    );
  }
  // tìm kiếm sản phẩm theo nhiều điều kiện
  get listFilter(): string {
    return this._litstFilter;
  }
  set Filter(value:string){
    this._litstFilter = value;
    this.product = this.listFilter ? this.performFilter(this.listFilter) : this.listproduct;
  }
  
  performFilter(filterBy: string): Idproduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.listproduct.filter((product: Idproduct) => {
      const searchableFields = ['name', 'category'];
      return searchableFields.some(field => {
        const fieldValue = (product as any)[field];
        return fieldValue && fieldValue.toLocaleLowerCase().includes(filterBy);
      });
    });
  }
 // show sản phẩm theo giá
  sort(order:any){
    if(order == 'asc'){
      this.product.sort((a:any, b:any) => a.price - b.price);
    }else{
        this.product.sort((a:any, b:any) => b.price - a.price);
    }
  }
  // show khuyến mãi
  discount(){
      if(this.showDiscountedProducts){
        this.showDiscountedProducts = false;
        this.product = this.listproduct;
        return;
      }else{
        this.showDiscountedProducts = true;
        this.product = this.listproduct.filter((p:any) => p.discount === 1);
      }
  }
  // phân trang

  get page(): any {
    const startIndex = (this.currentPage - 1) * this.soluong;
    const endIndex = startIndex + this.soluong;
    return this.product.slice(startIndex, endIndex);
  }
  
  get totalPageCount(): number {
    return Math.ceil(this.product.length / this.soluong);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  
  nextPage() {
    if (this.currentPage < this.totalPageCount) {
      this.currentPage++;
    }
  }
  
  setPage(page: number) {
    if (page >= 1 && page <= this.totalPageCount) {
      this.currentPage = page;
    }
  }
  
  getPages(): number[] {
    return Array.from({ length: this.totalPageCount }, (_, i) => i + 1);
  }  

  // show theo danh mucj
  flowCate(order:any){
    if(order == 'NIKE'){
      this.product = this.listproduct.filter((p:any) => p.category === 'NIKE');
    }else if(order == 'ADIDAS'){
      this.product = this.listproduct.filter((p:any) => p.category === 'ADIDAS');
    }else if(order == 'PUMA'){
      this.product = this.listproduct.filter((p:any) => p.category === 'PUMA');
    }else{ 
      this.product = this.listproduct;
    }
  }
}
