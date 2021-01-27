import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PreciosComponent } from './components/precios/precios.component';

import { ElegirComponent } from './components/elegir/elegir.component';
import { EjemplosComponent } from './components/ejemplos/ejemplos.component';
import { FuncionaComponent } from './components/funciona/funciona.component';

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
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
