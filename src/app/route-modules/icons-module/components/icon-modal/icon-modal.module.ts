import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClipboardModule } from 'ngx-clipboard';
import { NgxBootstrapIconsModule } from 'projects/ngx-bootstrap-icons-lib/src/lib/ngx-bootstrap-icons.module';

import { IconModalComponent } from './icon-modal/icon-modal.component';

@NgModule({
  declarations: [
    IconModalComponent,
  ],
  imports: [
    CommonModule,
    NgxBootstrapIconsModule.pick({}),
    ClipboardModule,
  ],
  exports: [
    IconModalComponent,
  ],
})
export class IconModalModule { }
