import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { allIcons } from 'projects/ngx-bootstrap-icons-lib/src/lib/icons/all';
import { NgxBootstrapIconsModule } from 'projects/ngx-bootstrap-icons-lib/src/lib/ngx-bootstrap-icons.module';

import { HeaderModule } from './components/header/header.module';
import { IconModalModule } from './components/icon-modal/icon-modal.module';
import { SearchBarModule } from './components/search-bar/search-bar.module';
import { TopSideModule } from './components/top-side/top-side.module';
import { IconsModuleRoutingModule } from './icons-module-routing.module';
import { IconsSearchPageComponent } from './pages/icons-search-page/icons-search-page.component';

@NgModule({
  declarations: [IconsSearchPageComponent],
  imports: [
    CommonModule,
    IconsModuleRoutingModule,
    NgxBootstrapIconsModule.pick(allIcons),
    SearchBarModule,
    HeaderModule,
    TopSideModule,
    IconModalModule,
    InfiniteScrollModule,
  ],
})
export class IconsModule { }
