import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { FullComponent } from './layouts/full/full.component';

export const Approutes: Routes = [
  {
    path: '',
    redirectTo: '/login', // Redirect to /login by default
    pathMatch: 'full'      // Ensure it only matches the empty path
  },
  {
    path: '', // Root path
    component: FullComponent, // Full layout that contains child routes
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      }
    ]
  },
  {
    path: 'login', // Login page route
    component: LoginComponent
  },
  {
    path: 'inscription', // Inscription page route
    component: InscriptionComponent
  },
  {
    path: '**', // Wildcard route, redirect to '/login' if route not found
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(Approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
