import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ViewLoginComponent } from './views/view-login/view-login.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'log-in', component: ViewLoginComponent},

];



