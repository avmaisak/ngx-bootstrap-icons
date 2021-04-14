import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BsImageComponent } from './bs-image/bs-image.component';

@NgModule({
  declarations: [BsImageComponent],
  imports: [CommonModule],
  exports: [BsImageComponent],
})
export class BsImageModule { }
