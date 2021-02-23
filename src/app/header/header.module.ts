import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxBootstrapIconsModule } from 'projects/ngx-bootstrap-icons-lib/src/lib/ngx-bootstrap-icons.module';

import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, NgxBootstrapIconsModule],
  exports: [HeaderComponent],
})
export class HeaderModule { }
