import { Icons } from './providers/icon.provider';
import { NgModule, Optional, ModuleWithProviders } from '@angular/core';
import { NgxBootstrapIconsLibComponent } from './components/ngx-bootstrap-icons.component';

@NgModule({
  declarations: [NgxBootstrapIconsLibComponent],
  exports: [NgxBootstrapIconsLibComponent]
})
export class NgxBootstrapIconsModule {
  constructor(@Optional() private icons: Icons) {
    // tslint:disable-next-line: curly
    if (!this.icons) throw new Error(`No icon provided. Make sure to use 'NgxBootstrapIconsModule.pick({ ... })' when importing the module\n`);
  }

  static pick(icons: {[key: string]: string}): ModuleWithProviders {
    return {
      ngModule: NgxBootstrapIconsModule,
      providers: [
        { provide: Icons, multi: true, useValue: icons }
      ]
    };
  }
}
