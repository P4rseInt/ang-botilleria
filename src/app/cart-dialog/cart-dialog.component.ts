import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.sass']
})
export class CartDialogComponent implements OnInit {
  arrData: any[];


  constructor(
    @Inject(MAT_DIALOG_DATA) public data) {
  }

  ngOnInit(): void {
    this.arrData = this.data;
  }

  eliminarProducto(producto) {
    if (producto) {
      this.arrData.pop();
    }
  }
}
