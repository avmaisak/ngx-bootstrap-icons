import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';
import { IconNamesEnum } from 'ngx-bootstrap-icons';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-icon-modal',
  templateUrl: './icon-modal.component.html',
  styleUrls: ['./icon-modal.component.scss'],
})
export class IconModalComponent {
  @Input()
  public icon!: IconNamesEnum;

  @Output()
  public closed = new EventEmitter<void>();

  public copied = false;

  constructor(
    private readonly _clipboardService: ClipboardService,
  ) {
  }

  public get iconCode(): string {
    return `<i-bs name="${this.icon}"
            width="75"
              height="75">
</i-bs>`.trim();
  }

  public copyToClipBoard(): void {
    this._clipboardService.copy(this.iconCode);
    this.copied = true;
  }
}
