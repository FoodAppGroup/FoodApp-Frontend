import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoggerService} from './logger.service';
import {Product} from '../interfaces/product';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductControllerService {

  private controllerUrl = environment.backendUrl + '/product/';
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private httpClient: HttpClient,
    private loggerService: LoggerService) {
  }

  /** GET heroes whose name contains search term */
  public getProduct(productName: string): Observable<Product> {
    const operation = 'get';
    const url = `${this.controllerUrl}` + operation + `/?name=${productName}`;
    return this.httpClient.get<Product>(url).pipe(
      tap(_ => this.log('executed: ' + operation + `with: ${productName}`)),
      catchError(this.handleError<Product>(operation))
    );
  }

  /** GET all business cards from the server */
  public getAllProducts(): Observable<Product[]> {
    const operation = 'get-all';
    return this.httpClient.get<Product[]>(this.controllerUrl + operation).pipe(
      tap(_ => this.log('executed: ' + operation)),
      catchError(this.handleError<Product[]>(operation, []))
    );
  }

  /** PUT: update the hero on the server */
  public updateProduct(product: Product): Observable<any> {
    const operation = 'update';
    return this.httpClient.put(this.controllerUrl + operation, product, this.httpOptions).pipe(
      tap(_ => this.log('executed: ' + operation + `on: ${product.name}`)),
      catchError(this.handleError<any>(operation))
    );
  }

  /** POST: add a new hero to the server */
  public addProduct(hero: Product): Observable<Product> {
    const operation = 'add';
    return this.httpClient.post<Product>(this.controllerUrl + operation, hero, this.httpOptions).pipe(
      tap((newProduct: Product) => this.log('executed: ' + operation + `with: ${newProduct.name}`)),
      catchError(this.handleError<Product>(operation))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a console message with the LoggingService */
  private log(message: string): void {
    this.loggerService.add(`[Product Controller] ${message}`);
  }
}
