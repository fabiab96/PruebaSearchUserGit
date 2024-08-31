import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'profile/:login',
    loadComponent: () =>
      import('./profile/profile.component').then(
        (component) => component.ProfileComponent
      ),
  },
];
