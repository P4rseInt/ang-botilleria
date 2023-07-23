import {Injectable} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {ProductosModel} from '../../productos/models/products-model';

@Injectable({
  providedIn: 'root'
})
export class CartDialogService {

  emitFinalArray: EventEmitter<ProductosModel[]> = new EventEmitter<ProductosModel[]>();
  responseDialogEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }
}
