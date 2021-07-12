import { Component } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-top-side',
  templateUrl: './top-side.component.html',
})
export class TopSideComponent {
  public readonly installScript = 'npm i ngx-bootstrap-icons --save';

  public copied = false;

  constructor(private readonly _clipboardService: ClipboardService) { }

  public copyToClipBoard(): void {
    this._clipboardService.copy(this.installScript);
    this.copied = true;
  }
}
