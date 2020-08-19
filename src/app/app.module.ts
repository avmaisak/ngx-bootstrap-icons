import { CommonModule, registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { allIcons, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
registerLocaleData(ru);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    NgxBootstrapIconsModule.pick(allIcons)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
