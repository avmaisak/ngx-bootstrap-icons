import { Component } from '@angular/core';

import { version } from '../../../package.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public get version(): string {
    return version;
  }
}
