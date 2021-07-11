import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { iconRoutes } from './app.routes';

@NgModule({
  imports: [RouterModule.forRoot(iconRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
