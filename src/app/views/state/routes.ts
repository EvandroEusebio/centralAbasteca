import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Províncias'
    },
    children: [
      {
        path: '',
        redirectTo: 'state',
        pathMatch: 'full'
      },
      {
        path: 'show',
        loadComponent: () => import('./show/show.component').then(m => m.ShowComponent),
        data: {
          title: 'Ver Todos'
        }
      },
      {
        path: 'add',
        loadComponent: () => import('./add/add.component').then(m => m.AddComponent),
        data: {
          title: 'Adicionar'
        }
      },
    ]
  }
];

