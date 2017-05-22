import { HomeComponent } from '../componentes/ejemplo-rutas/home/home.component';
import { AboutComponent } from '../componentes/ejemplo-rutas/about/about.component';
import { CoursesComponent } from '../componentes/ejemplo-rutas/courses/courses.component';
import { Routes } from '@angular/router';
import { coursesRouterConfig } from "app/routes-configuration/courses-route.config";
import { PrimerosEjemplosComponent } from "app/componentes/primeros-ejemplos/primeros-ejemplos.component";
import { AnidarComponentesComponent } from "app/componentes/anidar-componentes/anidar-componentes.component";
import { RestAndNgforComponent } from "app/componentes/rest-and-ngfor/rest-and-ngfor.component";

export const routerConfig: Routes = [
    {
        path: 'primeros-ejemplos',
        component: PrimerosEjemplosComponent
    },
    {
        path: 'anidar-componentes',
        component: AnidarComponentesComponent
    },
    {
        path: 'rest-and-ngfor',
        component: RestAndNgforComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    ...coursesRouterConfig,
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];