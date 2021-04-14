import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { ClipboardModule } from 'ngx-clipboard';

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
