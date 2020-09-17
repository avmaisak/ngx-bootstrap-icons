import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { ClipboardService } from 'ngx-clipboard';
import { icons } from './icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  items = icons;
  search: string;
  showCode = false;
  selectedIcon: string;
  selectedColor: string;
  colors: string[] = [
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
    'text-white-50'
  ];
  showAlert = false;

  private _getItems(): void {
    this.items = _.clone(icons);
  }

  constructor(private _clipboardService: ClipboardService) {
    this.selectedColor = this.colors[0];
  }

  ngOnInit(): void { this._getItems(); }

  onSearch(): void {
    if (this.search) this.items = _.clone(icons).filter((x) => x.includes(this.search.trim()));
    if (!this.search) this._getItems();
  }

  onClear(): void {
    if (!this.search) return;
    this.search = null;
    this._getItems();
  }

  htmlCode = (item: string): string => `<i-bs
  name="${item}"
  class="${this.selectedColor}"
  width="2rem"
  height="2rem">
</i-bs>`.trim();

  btnCode = (icon: string) => this.selectedIcon && icon === this.selectedIcon && this.btnCode;

  onShowCode(icon: string): void {
    this.showCode = !this.showCode;
    this.selectedIcon = icon;
    if (!this.showCode) this.selectedIcon = null;
  }

  toggleShowAlert(): void {
    this.showAlert = !this.showAlert;
  }

  onCopyToClipboard(code: string) {
    this._clipboardService.copy(code);
    this.showAlert = true;
  }
}
