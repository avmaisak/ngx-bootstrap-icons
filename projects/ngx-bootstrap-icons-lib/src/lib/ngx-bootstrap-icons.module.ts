import {
  ModuleWithProviders, NgModule,
} from '@angular/core';

import { NgxBootstrapIconsLibComponent } from './components/ngx-bootstrap-icons/ngx-bootstrap-icons.component';
import { IModuleConfigOptions, MODULE_CONFIG_TOKEN } from './config/module.config';
import { Icons } from './providers/icon.provider';

@NgModule({
  declarations: [NgxBootstrapIconsLibComponent],
  exports: [NgxBootstrapIconsLibComponent],
})
export class NgxBootstrapIconsModule {
  public static pick(icons: { [key: string]: string }, config?: IModuleConfigOptions): ModuleWithProviders<NgxBootstrapIconsModule> {
    return {
      ngModule: NgxBootstrapIconsModule,
      providers: [
        { provide: Icons, multi: true, useValue: icons },
        { provide: MODULE_CONFIG_TOKEN, useValue: config },
      ],
    };
  }
}
