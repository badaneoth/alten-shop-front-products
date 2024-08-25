import { Component, OnInit } from '@angular/core';
import { Product } from 'app/shared/models/ProductRessource';
import { ProductsService } from 'app/shared/services/products.service';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  errorMessage = '';

  sub!: Subscription;

  products: Product[];

  sortOptions: SelectItem[];

  sortOrder: number;

  sortField: string;

  constructor(private productsService: ProductsService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {

    this.sub = this.productsService.getProducts().subscribe({
      next: products => {
        this.products = products;
      },
      error: err => this.errorMessage = err
    });

    this.sortOptions = [
      { label: 'Price', value: 'price' }
    ];

    this.primengConfig.ripple = true;
  }
  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}


