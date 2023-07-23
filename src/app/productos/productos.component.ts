import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CartDialogComponent} from '../cart-dialog/cart-dialog.component';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductosModel} from './models/products-model';
import {MatTooltip} from '@angular/material/tooltip';
import {ProductosServiceService} from './productos-service/productos-service.service';
import {CartDialogService} from '../cart-dialog/services/cart-dialog.service';
import {NgxUiLoaderService} from 'ngx-ui-loader';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.sass'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 0}),
        animate(2000)
      ]),
      transition(':leave',
        animate(2000, style({opacity: 0})))
    ])
  ]
})

export class ProductosComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  @ViewChild('buttonToChange', {static: false}) buttonRef: ElementRef;

  @ViewChild(MatTooltip) tooltip: MatTooltip;

  tooltipDisabled: boolean;

  carritoItems: any[] = [];

  favoritosItems: any[] = [];

  formularios: any;


  productos: ProductosModel[] = [
    {
      url: 'https://jumbo.vtexassets.com/arquivos/ids/501293-280-280?width=280&height=280&aspect=true',
      productName: '',
      id: 1,
      verificado: false
      ,
      verificadoInput: false,
      cantidad: 0
    },
    {
      url: 'https://jumbo.vtexassets.com/arquivos/ids/369656-280-280?width=280&height=280&aspect=true',
      productName: '',
      id: 2,
      verificado: false
      ,
      verificadoInput: false,
      cantidad: 0
    },
    {
      url: 'https://jumbo.vtexassets.com/arquivos/ids/310987-280-280?width=280&height=280&aspect=true',
      productName: '',
      id: 3,
      verificado: false
      ,
      verificadoInput: false,
      cantidad: 0
    },
    {
      url: 'https://jumbo.vtexassets.com/arquivos/ids/486352-280-280?width=280&height=280&aspect=true',
      productName: '',
      id: 4,
      verificado: false
      ,
      verificadoInput: false,
      cantidad: 0
    },
    {
      url: 'https://jumbo.vtexassets.com/arquivos/ids/398793-280-280?width=280&height=280&aspect=true',
      productName: '',
      id: 5,
      verificado: false
      ,
      verificadoInput: false,
      cantidad: 0
    },
    {
      url: 'https://jumbo.vtexassets.com/arquivos/ids/351916-280-280?width=280&height=280&aspect=true',
      productName: '',
      id: 6,
      verificado: false
      ,
      verificadoInput: false,
      cantidad: 0,
    },
    {
      url: 'https://jumbo.vtexassets.com/arquivos/ids/619753-280-280?width=280&height=280&aspect=true',
      productName: '',
      id: 7,
      verificado: false,
      verificadoInput: false,
      cantidad: 0
    },
    {
      url: 'https://jumbo.vtexassets.com/arquivos/ids/372202-280-280?width=280&height=280&aspect=true',
      productName: '',
      id: 8,
      verificado: false,
      verificadoInput: false,
      cantidad: 0
    },
  ];
  cartHasLength: boolean;
  event;
  hiddeBtn: boolean;
  cantidad = 0;
  showTooltip = false;

  constructor(
    private ngxLoader: NgxUiLoaderService,
    public dialogRef: MatDialog,
    private productosServiceService: ProductosServiceService,
    private cartDialogService: CartDialogService
  ) {
  }

  ngOnInit(): void {
    this.ngxLoader.start();
    this.formularios = {};
    this.form = new FormGroup({
      cantidad: new FormControl('', Validators.required)
    });
    for (const p of this.productos) {
      this.formularios[p.id] = new FormGroup({
        cantidad: new FormControl('', Validators.required)
      });
    }
    this.cartDialogService.emitFinalArray.subscribe((data: any[]) => {
      if (data.length === 0) {
        this.carritoItems = [];
      }
    });
    setTimeout(() => {
      this.ngxLoader.stop();
    }, 100);
  }

  // getAllProducts() {
  //   this.productosServiceService.getAllProducts().subscribe(data => {
  //     console.log('DATA', data);
  //   });
  // }

  sendToFavourites(product) {
    this.favoritosItems.push(product.id);
    console.log('favoritos', this.favoritosItems);
  }

  async addToCart(product: ProductosModel) {
    console.log('product', product);
    if (this.getFormGroup(product.id).get('cantidad').valid && product) {
      this.ngxLoader.start();
      this.showTooltip = true;
      this.verificarProducto(product);
      this.verificarInput(product);
      this.cantidad = this.getFormGroup(product.id).get('cantidad').value;
      // this.getFormGroup(product.id).get('cantidad').setValue(0);
      for (let i = 0; i < this.cantidad; i++) {
        this.carritoItems.push(product);
        console.log('CARRITP ITEMS', this.carritoItems);
        if (this.carritoItems.length > 0) {
          this.cartHasLength = true;
        }
      }
      this.hiddeBtn = true;
    }
    this.ngxLoader.stop();
  }

  async verCarrito() {
    this.dialogRef.open(CartDialogComponent, {
      width: '35%',
      height: '90%',
      data: (this.carritoItems.length > 0) ? this.carritoItems : [],
      disableClose: false
    });
  }

  verificarProducto(producto: any) {
    producto.verificado = true;
    producto.verificadoInput = true;
  }

  verificarInput(producto: any) {
    producto.verificadoInput = true;
  }

  getFormGroup(id: number): FormGroup {
    this.tooltipDisabled = true;
    return this.formularios[id];
  }

  tooltipText(id): string {
    if (this.getFormGroup(id).get('cantidad').value === '' || this.getFormGroup(id).get('cantidad').value === 0) {
      return 'Debe ingresar una cantidad';
    } else {
      return 'Agregar al carrito';
    }
  }
}



