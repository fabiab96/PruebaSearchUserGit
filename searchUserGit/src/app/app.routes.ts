import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'searchUser', pathMatch: 'full' },
  {
    path: 'searchUser',
    loadComponent: () =>
      import('./modules/user/pages/searchs-users/searchs-users.component').then(
        (component) => component.SearchsUsersComponent
      ),
  },
  {
    path: 'searchUser',
    loadChildren: () =>
      import(
        './modules/user/pages/searchs-users/pages/searchs-users.routes'
      ).then((routes) => routes.routes),
  },
];
