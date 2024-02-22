import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { OrderComponent } from './order/order.component';
import { ThongkeComponent } from './thongke/thongke.component';
import { DetailorderComponent } from './detailorder/detailorder.component';
const routes: Routes = [

  { path: '', redirectTo: 'Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent },
  { path: 'ViewProduct/:productId', component: ViewProductComponent },
  { path: 'AddProduct', component: AddProductComponent },
  { path: 'EditProduct/:productId', component: EditProductComponent },
  { path: 'order', component: OrderComponent},
  { path: 'thongke', component: ThongkeComponent},
  { path: 'detailorder', component: DetailorderComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
