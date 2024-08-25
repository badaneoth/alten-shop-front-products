import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from 'app/shared/shared.module';
import { ProductsComponentRoutingModule } from './products-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    DataViewModule,
    TagModule,
    ButtonModule,
    DropdownModule,
    RatingModule,
    SharedModule,
    ProductsComponentRoutingModule
  ]
})
export class ProductsModule { }
