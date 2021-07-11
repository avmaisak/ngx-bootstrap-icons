import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [SearchBarComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [SearchBarComponent],
})
export class SearchBarModule { }
