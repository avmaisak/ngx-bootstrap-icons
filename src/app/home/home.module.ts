import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { allIcons } from 'projects/ngx-bootstrap-icons-lib/src/lib/icons';
import { NgxBootstrapIconsModule } from 'projects/ngx-bootstrap-icons-lib/src/lib/ngx-bootstrap-icons.module';

import { HeaderModule } from '../header/header.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderModule,
    FormsModule,
    ClipboardModule,
    NgxBootstrapIconsModule.pick(allIcons),
  ],
})
export class HomeModule { }
