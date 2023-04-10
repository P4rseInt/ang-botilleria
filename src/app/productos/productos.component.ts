import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AlertService} from 'ngx-alerts';
import {MatDialog} from '@angular/material/dialog';
import {CartDialogComponent} from '../cart-dialog/cart-dialog.component';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductosModel} from './models/products-model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.sass'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 0}),
        animate(500)
      ]),
      transition(':leave',
        animate(500, style({opacity: 0})))
    ])
  ]
})

export class ProductosComponent implements OnInit, AfterViewInit {
  form: FormGroup = new FormGroup({});
  @ViewChild('buttonToChange', {static: false})
  buttonRef: ElementRef;

  carritoItems: any[] = [];

  favoritosItems: any[] = [];


  productos = [
    {
      url: 'https://jumbo.vtexassets.com/arquivos/ids/621793-280-280?width=280&height=280&aspect=true',
      productName: '',
      id: 1,
      verificado: false
      ,
      verificadoInput: false
    },
    {
      url: 'https://jumbo.vtexassets.com/arquivos/ids/501293-280-280?width=280&height=280&aspect=true',
      productName: '',
      id: 2,
      verificado: false
      ,
      verificadoInput: false
    },
    {
      url: 'https://jumbo.vtexassets.com/arquivos/ids/369656-280-280?width=280&height=280&aspect=true',
      productName: '',
      id: 3,
      verificado: false
      ,
      verificadoInput: false
    },
    {
      url: 'https://jumbo.vtexassets.com/arquivos/ids/310987-280-280?width=280&height=280&aspect=true',
      productName: '',
      id: 4,
      verificado: false
      ,
      verificadoInput: false
    },
    {
      url: 'https://jumbo.vtexassets.com/arquivos/ids/486352-280-280?width=280&height=280&aspect=true',
      productName: '',
      id: 5,
      verificado: false
      ,
      verificadoInput: false
    },
    {
      url: 'https://jumbo.vtexassets.com/arquivos/ids/352171-280-280?width=280&height=280&aspect=true',
      productName: '',
      id: 6,
      verificado: false
      ,
      verificadoInput: false
    },
    {
      url: 'https://jumbo.vtexassets.com/arquivos/ids/619753-280-280?width=280&height=280&aspect=true',
      productName: '',
      id: 7,
      verificado: false
      ,
      verificadoInput: false
    },
    {
      url: 'https://jumbo.vtexassets.com/arquivos/ids/398793-280-280?width=280&height=280&aspect=true',
      productName: '',
      id: 8,
      verificado: false
      ,
      verificadoInput: false
    },
    {
      url: 'https://jumbo.vtexassets.com/arquivos/ids/351916-280-280?width=280&height=280&aspect=true',
      productName: '',
      id: 9,
      verificado: false
      ,
      verificadoInput: false,
    },
    {
      url: 'https://jumbo.vtexassets.com/arquivos/ids/619753-280-280?width=280&height=280&aspect=true',
      productName: '',
      id: 10,
      verificado: false,
      verificadoInput: false
    },
    {
      url: 'https://jumbo.vtexassets.com/arquivos/ids/372202-280-280?width=280&height=280&aspect=true',
      productName: '',
      id: 11,
      verificado: false,
      verificadoInput: false
    },
    {
      url: 'https://jumbo.vtexassets.com/arquivos/ids/372202-280-280?width=280&height=280&aspect=true',
      productName: '',
      id: 12,
      verificado: false,
      verificadoInput: false
    }
  ];
  saveLength: boolean;
  tooltip: any = '¡Agregado al carro!';
  event;
  hiddeBtn: boolean;
  checkDuplicated: boolean;
  cantidad = 0;

  constructor(
    public dialogRef: MatDialog,
  ) {
  }

  ngAfterViewInit() {
    console.log('afterinit');
    console.log(this.buttonRef.nativeElement);

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      cantidad: new FormControl('', Validators.required)
    });
  }

  sendToFavourites(product) {
    this.favoritosItems.push(product.id);
    console.log('favoritos', this.favoritosItems);
  }

  async addToCart(product: ProductosModel) {
    if (this.form.get('cantidad').valid && product) {
      this.verificarProducto(product);
      this.verificarInput(product);
      this.cantidad = this.form.get('cantidad').value;
      for (let i = 0; i < this.cantidad; i++) {
        this.carritoItems.push(product);
        if (this.carritoItems.length > 0) {
          const filterId: number[] = this.carritoItems.map(x => x.id);
          this.saveLength = true;
          this.checkDuplicated = this.tieneDuplicados(filterId);
        }
      }
      this.hiddeBtn = true;
    } else {
      this.form.get('cantidad').markAsTouched();
    }
  }

  private tieneDuplicados(arr) {
    let duplicados = false;
    arr.forEach((elemento, indice) => {
      if (arr.findIndex((e: any, i: any) => i !== indice && JSON.stringify(e) === JSON.stringify(elemento)) !== -1) {
        duplicados = true;
      }
    });
    return duplicados;
  }

  async verCarrito() {
    this.dialogRef.open(CartDialogComponent, {
      width: '50%',
      height: '80%',
      data: (this.carritoItems.length > 0) ? this.carritoItems : []
    });
  }

  verificarProducto(producto: any) {
    producto.verificado = true;
    producto.verificadoInput = true;
  }

  verificarInput(producto: any) {
    producto.verificadoInput = true;
  }
}

