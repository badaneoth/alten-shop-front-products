import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Product } from '../models/ProductRessource';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productUrl = '/assets/products.json';

  private urlApi = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {

  }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl)
      .pipe(
        map((res: any) => res.data),
        catchError((e) => this.handleError(e))
      );
  }
  /** pour la partie back Nest js */
  create(product: Product): Observable<void> {
    return this.http.post<void>(this.urlApi, product).pipe(
      map((res) => res),
      catchError((e) => this.handleError(e))
    );
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.urlApi).pipe(
      map((res) => res),
      catchError((e) => this.handleError(e))
    );
  }

  getProductById(id: string): Observable<Product> {
    const url = `${this.urlApi}/${id}`;
    return this.http.get<Product>(url).pipe(
      map((res) => res),
      catchError((e) => this.handleError(e))
    );
  }

  updateProduct(product: Product): Observable<Product> {
    const url = `${this.urlApi}/${product.id}`;
    return this.http.put<Product>(url, product).pipe(
      map((res) => res),
      catchError((e) => this.handleError(e))
    );
  }

  deleteProduct(id: string): Observable<void> {
    const url = `${this.urlApi}/${id}`;
    return this.http.delete<void>(url).pipe(
      map((res) => res),
      catchError((e) => this.handleError(e))
    );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {

    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;

      console.error(errorMessage);
      return throwError(() => errorMessage);
    }
  }
}
