import { CoursesComponent } from '../componentes/ejemplo-rutas/courses/courses.component';
import { CourseCardsComponent } from "app/componentes/ejemplo-rutas/courses/course-cards/course-cards.component";
import { Routes } from '@angular/router';


export const coursesRouterConfig: Routes = [
    {
        path: 'courses',
        component: CoursesComponent,
        children: [
            {
                path: '', 
                component: CourseCardsComponent
            }
        ]
  
    },
];