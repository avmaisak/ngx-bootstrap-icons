import { CommonModule, registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { allIcons } from 'projects/ngx-bootstrap-icons-lib/src/lib/icons';
import { NgxBootstrapIconsModule } from 'projects/ngx-bootstrap-icons-lib/src/lib/ngx-bootstrap-icons.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

registerLocaleData(ru);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
