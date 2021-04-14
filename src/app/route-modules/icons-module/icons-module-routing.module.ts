import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { iconModuleRoutes } from './icons-module.routes';

@NgModule({
  imports: [RouterModule.forChild(iconModuleRoutes)],
  exports: [RouterModule],
})
export class IconsModuleRoutingModule { }
