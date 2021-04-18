import { Component } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { version } from 'package.json';
@Component({
  selector: 'app-top-side',
  templateUrl: './top-side.component.html',
  styleUrls: ['./top-side.component.scss'],
})
export class TopSideComponent {
  public readonly installScript = 'npm i ngx-bootstrap-icons --save';

  public copied = false;

  constructor(private readonly _clipboardService: ClipboardService) { }

  public copyToClipBoard(): void {
    this._clipboardService.copy(this.installScript);
    this.copied = true;
  }

  public get version(): string {
    return version;
  }
}
