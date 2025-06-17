import { Routes } from '@angular/router';
import {Homepage} from './pages/homepage/homepage';
import {Explore} from './pages/explore/explore';
import {Login} from './pages/login/login';
import {NotAuthLayout} from './layouts/not-auth-layout/not-auth-layout';
import {AuthLayout} from './layouts/auth-layout/auth-layout';
import {Myradar} from './pages/myradar/myradar';
import {MovieDetail} from './pages/movie-detail/movie-detail';

export const routes: Routes = [
  // NAVIGATION
  {
    path: '',
    component: AuthLayout,
    children: [
      {path: '', component: Homepage},
      {path: 'esplora', component: Explore},
      {path: 'film/:id', component: MovieDetail},
      {path: 'myradar', component: Myradar},
    ]
  },

  // LOGIN
  {
    path: '',
    component: NotAuthLayout,
    children: [
      {path: 'login', component: Login},
    ]
  },

  { path: '**', redirectTo: 'login' }
];
