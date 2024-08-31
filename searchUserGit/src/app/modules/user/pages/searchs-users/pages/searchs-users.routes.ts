import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'profile/:login',
    loadComponent: () =>
      import('./user-profile/user-profile.component').then(
        (component) => component.UserProfileComponent
      ),
  },
];
