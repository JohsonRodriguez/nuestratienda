import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app.routes';
import{HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PreciosComponent } from './components/precios/precios.component';

import { ElegirComponent } from './components/elegir/elegir.component';
import { EjemplosComponent } from './components/ejemplos/ejemplos.component';
import { FuncionaComponent } from './components/funciona/funciona.component';
import { RegistroComponent } from './components/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    PreciosComponent,
    
    ElegirComponent,
    
    EjemplosComponent,
    
    FuncionaComponent,
    
    RegistroComponent,
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
