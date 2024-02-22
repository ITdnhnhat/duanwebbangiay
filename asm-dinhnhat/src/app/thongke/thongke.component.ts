import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thongke',
  templateUrl: './thongke.component.html',
  styleUrls: ['./thongke.component.scss']
})
export class ThongkeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  sanPhamCount: number = 0;
  donHangCount: number = 0;

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/products').subscribe(data => {
      console.log('Dữ liệu từ /products:', data);
      this.sanPhamCount = data.length;
    });

    this.http.get<any>('http://localhost:3000/order').subscribe(data => {
      console.log('Dữ liệu từ /cart:', data);
      this.donHangCount = data.length;
    });
  }
}

