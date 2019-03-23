import { environment } from './../../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators';
import { Product } from './produto.model';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {
  private apiPath = environment.baseUrl + '/categories';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get(this.apiPath).pipe(
      catchError(this.handleError),
      map(this.jsonDataToProducts)
    );
  }

  getById(id: number): Observable<Product> {
    const url = this.apiPath + '/' + id;
    return this.http.get(url).pipe(
      catchError(this.handleError),
      map(this.jsonDataToProduct)
    );
  }

  create(product: Product): Observable<Product> {
    return this.http.post(this.apiPath, product).pipe(
      catchError(this.handleError),
      map(() => product)
    );
  }

  update(product: Product): Observable<Product> {
    const url = this.apiPath + '/' + product.id;

    return this.http.put(url, product).pipe(
      catchError(this.handleError),
      map(() => product)
    );
  }

  delete(id: number): Observable<Product> {
    const url = this.apiPath + '/' + id;

    return this.http.delete(url).pipe(
      catchError(this.handleError),
      map(this.jsonDataToProduct)
    );
  }

  private jsonDataToProducts(jsonData: any[]): Product[] {
    const products: Product[] = [];
    jsonData.forEach(element => products.push(element as Product));
    return products;
  }

  private jsonDataToProduct(jsonData: any): Product {
    return jsonData as Product;
  }

  private handleError(error: any): Observable<any> {
    console.log('request error -> ', error);
    return throwError(error);
  }

}
