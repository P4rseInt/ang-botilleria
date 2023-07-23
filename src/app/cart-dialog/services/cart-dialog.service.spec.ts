import { TestBed } from '@angular/core/testing';

import { CartDialogService } from './cart-dialog.service';

describe('CartDialogService', () => {
  let service: CartDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
