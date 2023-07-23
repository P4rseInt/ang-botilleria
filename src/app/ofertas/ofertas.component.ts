import {Component, OnInit} from '@angular/core';
import {NgxUiLoaderService} from 'ngx-ui-loader';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.sass']
})
export class OfertasComponent implements OnInit {

  constructor(private ngxLoader: NgxUiLoaderService) {
  }

  ngOnInit(): void {
    this.ngxLoader.start();
    setTimeout(() => {
      this.ngxLoader.stop();
    }, 500);
  }
}
