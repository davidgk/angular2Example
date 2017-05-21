import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MiNuevoComponenteComponent } from './componentes/mi-nuevo-componente/mi-nuevo-componente.component';
import { CataComponent } from './componentes/cata/cata.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';
import { RestExampleComponent } from './componentes/rest-example/rest-example.component';
import { NavigatorComponent } from './componentes/navigator/navigator.component';
import { RouterOutletComponent } from './componentes/navigator/router-outlet/router-outlet.component';

@NgModule({
  declarations: [
    AppComponent,
    MiNuevoComponenteComponent,
    CataComponent,
    PeliculasComponent,
    RestExampleComponent,
    NavigatorComponent,
    RouterOutletComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
