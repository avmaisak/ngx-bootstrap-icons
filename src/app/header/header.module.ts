import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';

import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, NgxBootstrapIconsModule],
  exports: [HeaderComponent],
})
export class HeaderModule { }
