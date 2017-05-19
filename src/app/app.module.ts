import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MiNuevoComponenteComponent } from './mi-nuevo-componente/mi-nuevo-componente.component';
import { CataComponent } from './cata/cata.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';

@NgModule({
  declarations: [
    AppComponent,
    MiNuevoComponenteComponent,
    CataComponent,
    PeliculasComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
