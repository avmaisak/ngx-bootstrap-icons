import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClipboardModule } from 'ngx-clipboard';
import { x } from 'projects/ngx-bootstrap-icons-lib/src/lib/icons/x';
import { NgxBootstrapIconsModule } from 'projects/ngx-bootstrap-icons-lib/src/lib/ngx-bootstrap-icons.module';

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
