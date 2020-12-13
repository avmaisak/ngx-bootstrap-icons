import { ModuleWithProviders, NgModule, Optional } from '@angular/core';

import { NgxBootstrapIconsLibComponent } from './components/ngx-bootstrap-icons/ngx-bootstrap-icons.component';
import { Icons } from './providers/icon.provider';

@NgModule({
  declarations: [NgxBootstrapIconsLibComponent],
  exports: [NgxBootstrapIconsLibComponent],
})
export class NgxBootstrapIconsModule {
  constructor(@Optional() private _icons: Icons) {
    if (!this._icons) throw new Error('No icon provided. Make sure to use \'NgxBootstrapIconsModule.pick({ ... })\' when importing the module\n');
  }

  public static pick(icons: { [key: string]: string }): ModuleWithProviders<NgxBootstrapIconsModule> {
    return {
      ngModule: NgxBootstrapIconsModule,
      providers: [
        { provide: Icons, multi: true, useValue: icons },
      ],
    };
  }
}
