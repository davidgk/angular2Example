import { HomeComponent } from './componentes/ejemplo-rutas/home/home.component';
import { AboutComponent } from './componentes/ejemplo-rutas/about/about.component';
import { CoursesComponent } from './componentes/ejemplo-rutas/courses/courses.component';
import { Routes } from '@angular/router';

export const routerConfig: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'courses',
        component: CoursesComponent
    },
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