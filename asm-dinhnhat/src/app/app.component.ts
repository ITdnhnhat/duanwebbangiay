import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private router: Router) {
   }

  HomeClick(){
    this.router.navigate(['Home']);
  }
  CartClick(){
    this.router.navigate(['order']);
  }
  thongKeClick(){
    this.router.navigate(['thongke']);
  }

}
