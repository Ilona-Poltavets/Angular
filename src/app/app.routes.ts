import { Routes } from '@angular/router';
import { HomeGridComponent } from './home-grid/home-grid.component';
import { EcologyComponent } from './ecology/ecology.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path:'', component:AppComponent},
    {path:'ecology', component:EcologyComponent},
];
