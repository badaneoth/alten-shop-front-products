import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from 'app/shared/shared.module';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { ProductsAdminComponent } from './products-admin.component';
import { ProductsAdminComponentRoutingModule } from './products-admin-routing.module';
import { MessageService, ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [
    ProductsAdminComponent
  ],
  providers:[MessageService, ConfirmationService],
  imports: [
    CommonModule,
    DataViewModule,
    TagModule,
    ButtonModule,
    DropdownModule,
    RatingModule,
    SharedModule,
    ProductsAdminComponentRoutingModule
  ]
})
export class ProductsAdminModule { }
