import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  // arrButtons =
  //   [
  //     {id: 1, visibleName: 'Productos', routerLink: ['/productos'], icon: 'inventory'},
  //     {id: 2, visibleName: 'Ofertas', routerLink: ['/ofertas'], icon: 'savings'},
  //     {id: 3, visibleName: 'Nosotros', routerLink: ['/nosotros'], icon: 'handshake'}
  //   ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
