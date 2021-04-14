import { Routes } from '@angular/router';

export const iconRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'icons' },
  { path: 'icons', loadChildren: () => import('./route-modules/icons-module/icons.module').then((m) => m.IconsModule) },
];
