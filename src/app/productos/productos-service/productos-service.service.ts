import {EventEmitter, Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductosServiceService {
  productosCarrito: any = new EventEmitter();

  constructor() {
  }
}
