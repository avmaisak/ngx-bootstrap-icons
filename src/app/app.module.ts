import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Alarm } from 'ngx-bootstrap-icons-lib';
import { NgxBootstrapIconsLibModule } from 'projects/ngx-bootstrap-icons-lib/src/lib/ngx-bootstrap-icons-lib.module';
import { allIcons } from 'projects/ngx-bootstrap-icons-lib/src/lib/icons/all';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBootstrapIconsLibModule.pick(allIcons)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
