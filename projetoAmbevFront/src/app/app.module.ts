import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MenuComponent} from './menu/menu.component';
import { ConsultaComponent } from './cliente/consultacliente/consulta.component';
import { CadastroComponent } from './cliente/cadastro/cadastro-cliente.component';
import { AppRouting } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { VendedorComponent } from './vendedor/cadastro/vendedor.component';
import { ConsultaVendedorComponent } from './vendedor/consulta-vendedor/consulta-vendedor.component';

import { OrderModule } from 'ngx-order-pipe'; 
import { CsvService } from 'angular2-json2csv';
import { FiltroPipe } from './filtro.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ConsultaComponent,
    CadastroComponent,
    VendedorComponent,
    ConsultaVendedorComponent,
    FiltroPipe,
   


  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRouting,
    OrderModule
   
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
