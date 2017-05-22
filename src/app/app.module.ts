import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MiNuevoComponenteComponent } from './componentes/mi-nuevo-componente/mi-nuevo-componente.component';
import { CataComponent } from './componentes/cata/cata.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';
import { RestExampleComponent } from './componentes/rest-example/rest-example.component';
import { NavigatorComponent } from './componentes/navigator/navigator.component';
import { RouterOutletComponent } from './componentes/router-outlet/router-outlet.component';
import { HomeComponent } from './componentes/ejemplo-rutas/home/home.component';
import { AboutComponent } from './componentes/ejemplo-rutas/about/about.component';
import { CoursesComponent } from './componentes/ejemplo-rutas/courses/courses.component';
import { routerConfig } from './routes-configuration/top-menu.config';
import { CourseCardsComponent } from './componentes/ejemplo-rutas/courses/course-cards/course-cards.component';
import { PrimerosEjemplosComponent } from './componentes/primeros-ejemplos/primeros-ejemplos.component';


@NgModule({
  declarations: [
    AppComponent,
    MiNuevoComponenteComponent,
    CataComponent,
    PeliculasComponent,
    RestExampleComponent,
    NavigatorComponent,
    RouterOutletComponent,
    HomeComponent,
    AboutComponent,
    CoursesComponent,
    CourseCardsComponent,
    PrimerosEjemplosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
