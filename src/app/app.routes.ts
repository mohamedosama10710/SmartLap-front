import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
  {path:'',component:Home,title:'Default Page'},
  {path:'Home',component:Home,title:"Home Page"},
  {path:'**',component:NotFound,title:"Not Found Page"}
];
