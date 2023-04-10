import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AlertModule} from 'ngx-alerts';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {ProductosComponent} from './productos/productos.component';
import {OfertasComponent} from './ofertas/ofertas.component';
import {NosotrosComponent} from './nosotros/nosotros.component';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {NavbarComponent} from './navbar/navbar.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {CartDialogComponent} from './cart-dialog/cart-dialog.component';
import {MatBadgeModule} from '@angular/material/badge';
import { UtilsComponent } from './Utils/utils/utils.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProductosComponent,
    OfertasComponent,
    NosotrosComponent,
    NavbarComponent,
    CartDialogComponent,
    UtilsComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'home', component: HomeComponent},
      {path: 'productos', component: ProductosComponent},
      {path: 'ofertas', component: OfertasComponent},
      {path: 'nosotros', component: NosotrosComponent}
    ]),

    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, positionX: 'right', positionY: 'top'}),
    MatSidenavModule,
    FormsModule,
    MatListModule,
    MatGridListModule,
    MatIconModule,
    MatTooltipModule,
    MatBadgeModule,

  ],
  entryComponents: [CartDialogComponent],
  providers: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
