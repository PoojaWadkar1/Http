import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { authGuard } from './auth.guard';
import { canConfirmguardGuard } from './can-confirmguard.guard';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:'products', component:ProductsComponent,canActivate:[authGuard],children:[
    {path:'productlist',component:ProductlistComponent},
    {path:'create-product',component:CreateProductComponent,canDeactivate:[ canConfirmguardGuard]},
    {path:'editproduct/:id',component:CreateProductComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
