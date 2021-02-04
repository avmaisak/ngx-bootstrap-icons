import {
  ModuleWithProviders, NgModule, Optional, SkipSelf,
} from '@angular/core';

import { NgxBootstrapIconsLibComponent } from './components/ngx-bootstrap-icons/ngx-bootstrap-icons.component';
import { IModuleConfigOptions, MODULE_CONFIG_TOKEN } from './config/module.config';
import { Icons } from './providers/icon.provider';

@NgModule({
  declarations: [NgxBootstrapIconsLibComponent],
  exports: [NgxBootstrapIconsLibComponent],
})
export class NgxBootstrapIconsModule {
  constructor(
    @Optional() private _icons: Icons,
    @Optional() @SkipSelf() parentModule: NgxBootstrapIconsModule,
  ) {
    if (parentModule) throw new Error('NgxBootstrapIconsModule is already loaded. Import it in the AppModule only');
    if (!this._icons) throw new Error('No icon provided. Make sure to use \'NgxBootstrapIconsModule.pick({ ... })\' when importing the module\n');
  }

  public static forRoot(icons: { [key: string]: string }, config?: IModuleConfigOptions): ModuleWithProviders<NgxBootstrapIconsModule> {
    return {
      ngModule: NgxBootstrapIconsModule,
      providers: [
        { provide: Icons, multi: true, useValue: icons },
        { provide: MODULE_CONFIG_TOKEN, useValue: config },
      ],
    };
  }
}
