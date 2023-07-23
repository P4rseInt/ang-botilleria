import {Component, OnInit} from '@angular/core';
import {NgxUiLoaderService} from 'ngx-ui-loader';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.sass']
})
export class NosotrosComponent implements OnInit {

  constructor(private ngxLoader: NgxUiLoaderService) {
  }

  ngOnInit(): void {
    this.ngxLoader.start();
    setTimeout(() => {
      this.ngxLoader.stop();
    }, 500);
  }
}
