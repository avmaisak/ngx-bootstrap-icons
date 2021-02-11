import { CommonModule, registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { allIcons, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { ClipboardModule } from 'ngx-clipboard';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './header/header.module';

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
    NgxBootstrapIconsModule.forRoot(allIcons),
    ClipboardModule,
    HeaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
