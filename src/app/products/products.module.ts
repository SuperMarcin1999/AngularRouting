import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductslistComponent } from './productslist/productslist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import {RouterLinkWithHref, RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    ProductslistComponent,
    ProductdetailsComponent
  ],
  imports: [
    CommonModule,
    RouterLinkWithHref,
    RouterModule
  ]
})
export class ProductsModule { }
