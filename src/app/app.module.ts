import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { AlmacenesComponent } from './components/almacenes/almacenes.component';

@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    AlmacenesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
