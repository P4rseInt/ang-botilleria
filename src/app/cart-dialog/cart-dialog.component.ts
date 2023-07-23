import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {CartDialogService} from './services/cart-dialog.service';
import {ProductosModel} from '../productos/models/products-model';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.sass']
})
export class CartDialogComponent implements OnInit {
  arrData: any[];
  form: FormGroup = new FormGroup({});
  arrPorCantidad: ProductosModel[];
  private p: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private cartDialogService: CartDialogService) {
  }


  ngOnInit(): void {
    this.arrData = this.data;
    this.form = new FormGroup({
      cantidad: new FormControl('', [Validators.required])
    });
    this.agruparDuplicadosPorCantidad().then(() => {
      this.inicializarCantidades();
    });
  }

  private inicializarCantidades(): void {
    this.arrPorCantidad.forEach((producto) => {
      const formGroup = this.getFormGroup(producto.id);
      formGroup.get('cantidad').setValue(producto.cantidad);
    });
  }

  agruparDuplicadosPorCantidad(): Promise<any> {
    return new Promise((resolve) => {
      const map = new Map();
      this.arrData.forEach((current) => {
        const existing = map.get(current.id);
        if (existing) {
          existing.cantidad += 1;
        } else {
          const newObject = {...current, cantidad: 1};
          map.set(current.id, newObject);
        }
      });
      this.arrPorCantidad = Array.from(map.values()).filter((value) => value.cantidad > 0);
      resolve(this.arrPorCantidad);
    });
  }

  eliminarTodos() {
    this.arrPorCantidad = [];
    if (this.arrPorCantidad.length === 0) {
      this.arrData = this.arrPorCantidad;
      this.cartDialogService.emitFinalArray.emit(this.arrData);
    }
  }

  getFormGroup(productId: number): FormGroup {
    if (!this.form.get(String(productId))) {
      const newFormGroup = new FormGroup({
        cantidad: new FormControl('', [Validators.required])
      });
      this.form.addControl(String((productId)), newFormGroup);
    }
    return this.form.get(String((productId))) as FormGroup;
  }

}
