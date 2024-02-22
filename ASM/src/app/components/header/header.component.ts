import { Component } from '@angular/core';
import { category } from '../entities/product';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  click(){
    alert("hello");
  }
  category  : category[] = [
    {
      "id":1,
      "name": 'laptop',
      "description": ''
    },
    {
      "id":2,
      "name": 'smartphone',
      "description": ''
    },
    {
      "id":3,
      "name": 'headphone',
      "description": ''
    }
  ]
}
