import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details-computer/details-computer.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page',
    },
    {
        path: 'computers/details/:id',
        component: DetailsComponent,
        title: 'Computer details',
    },
];
