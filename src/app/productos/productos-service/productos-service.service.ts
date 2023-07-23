import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosServiceService {
  productosCarrito: any = new EventEmitter();

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getAllProducts() {
    return this.httpClient.get('localhost:8090/products');
  }
}
