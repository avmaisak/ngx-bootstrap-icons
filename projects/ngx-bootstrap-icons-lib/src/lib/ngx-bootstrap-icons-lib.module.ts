import { Icons } from './providers/icon.provider';
import { NgModule, Optional, ModuleWithProviders } from '@angular/core';
import { NgxBootstrapIconsLibComponent } from './components/ngx-bootstrap-icons-lib.component';

@NgModule({
  declarations: [NgxBootstrapIconsLibComponent],
  exports: [NgxBootstrapIconsLibComponent]
})
export class NgxBootstrapIconsLibModule {
  constructor(
    @Optional() private icons: Icons) {
    // tslint:disable-next-line: curly
    if (!this.icons) throw new Error(`No icon provided. Make sure to use 'NgxBootstrapIconsLibModule.pick({ ... })' when importing the module\n`);
  }

  static pick(icons: {[key: string]: string}): ModuleWithProviders {
    return {
      ngModule: NgxBootstrapIconsLibModule,
      providers: [
        { provide: Icons, multi: true, useValue: icons }
      ]
    };
  }
}
