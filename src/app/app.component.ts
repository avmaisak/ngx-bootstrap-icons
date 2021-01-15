import { Component, OnInit } from '@angular/core';
import { clone } from 'lodash';
import { ClipboardService } from 'ngx-clipboard';
import { IconNamesEnum } from 'projects/ngx-bootstrap-icons-lib/src/lib/enums/icon-names.enum';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public items: string[] = [];

  public search: string;

  public showCode = false;

  public selectedIcon: string;

  public colors: string[] = [
    'text-primary',
    'text-secondary',
    'text-success',
    'text-danger',
    'text-warning',
    'text-info',
    'text-dark',
    'text-body',
    'text-muted',
    'text-black-50',
    'text-white-50',
  ];

  public selectedColor = this.colors[0];

  public showAlert = false;

  public allIcons = Object.values(IconNamesEnum);

  constructor(private _clipboardService: ClipboardService) { }

  public ngOnInit(): void {
    this._getItems();
  }

  public onSearch(): void {
    if (this.search) this.items = clone(this.allIcons).filter((x) => x.includes(this.search.trim()));
    if (!this.search) this._getItems();
  }

  public onClear(): void {
    if (!this.search) return;
    this.search = null;
    this._getItems();
  }

  public htmlCode = (item: string): string => `<i-bs
  name="${item}"
  class="${this.selectedColor}"
  width="2rem"
  height="2rem">
</i-bs>`.trim();

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  public btnCode = (icon: string) => this.selectedIcon && icon === this.selectedIcon && this.btnCode;

  public onShowCode(icon: string): void {
    this.showCode = !this.showCode;
    this.selectedIcon = icon;
    if (!this.showCode) this.selectedIcon = null;
  }

  public toggleShowAlert(): void {
    this.showAlert = !this.showAlert;
  }

  public onCopyToClipboard(code: string): void {
    this._clipboardService.copy(code);
    this.showAlert = true;
  }

  public get noSearchData(): boolean {
    if (!this.search) return true;
    if (this.search.length === 0) return true;
    return false;
  }

  private _getItems(): void {
    this.items = clone(this.allIcons);
  }
}
