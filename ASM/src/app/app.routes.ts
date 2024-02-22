import { Routes } from '@angular/router';
import { HomesComponent } from './components/homes/homes.component';
import { LoginComponent } from './components/login/login.component';
import { DetailsProductComponent } from './components/details-product/details-product.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoryComponent } from './components/category/category.component';


export const routes: Routes = [
  {path: '', component: HomesComponent },
  {path: 'home', redirectTo: '', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'details/:id', component: DetailsProductComponent},
  {path: 'cart', component: CartComponent},
  {path: 'category', component: CategoryComponent},
];
