import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ModeloPapaComponent } from './modelo-papa/modelo-papa.component';
import { ModeloHijoComponent } from './modelo-hijo/modelo-hijo.component';
import { CarritoComponent } from './carrito/carrito.component';
import {app_routing} from "./app.routes";
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import { CardPadreComponent } from './card-padre/card-padre.component';
import { CardHijoComponent } from './card-hijo/card-hijo.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModeloPapaComponent,
    ModeloHijoComponent,
    CarritoComponent,
    CardPadreComponent,
    CardHijoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatInputModule,
    ButtonModule,
    CardModule,
    TableModule,
    app_routing,
    MatBadgeModule,
    MatIconModule,
    HttpClientModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
