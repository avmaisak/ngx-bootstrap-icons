import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxBootstrapIconsModule, x } from 'ngx-bootstrap-icons';
import { ClipboardModule } from 'ngx-clipboard';

import { BsImageModule } from '../bs-image/bs-image.module';
import { TopSideComponent } from './top-side/top-side.component';

@NgModule({
  declarations: [
    TopSideComponent,
  ],
  imports: [
    CommonModule,
    ClipboardModule,
    NgxBootstrapIconsModule.pick({ x }),
    BsImageModule,
  ],
  exports: [TopSideComponent],
})
export class TopSideModule { }
