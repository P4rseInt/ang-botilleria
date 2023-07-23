import {Component, OnInit} from '@angular/core';
import {CartDialogService} from '../cart-dialog/services/cart-dialog.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-delete-confirmation',
  templateUrl: './dialog-delete-confirmation.component.html',
  styleUrls: ['./dialog-delete-confirmation.component.sass']
})
export class DialogDeleteConfirmationComponent implements OnInit {

  constructor(
    private cartDialogService: CartDialogService
  ) {
  }

  ngOnInit(): void {
  }

  generateConfirmations(response: string) {
    if (response === 'SI') {
      this.cartDialogService.responseDialogEmitter.emit(response);
    } else {
      this.cartDialogService.responseDialogEmitter.emit(response);
    }
  }
}
