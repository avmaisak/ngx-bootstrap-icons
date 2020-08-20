import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
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

  private _getItems = () => this.items = _.clone(icons);

  constructor() {
    this.selectedColor = this.colors[0];
  }

  ngOnInit(): void { this._getItems(); }

  onSearch = () => {
    if (this.search) this.items = _.clone(icons).filter((x) => x.includes(this.search.trim()));
    if (!this.search) this._getItems();
  }

  onClear() {
    if (!this.search) return;
    this.search = null;
    this._getItems();
  }

  getHtmlCode = (item: string) => `<i-bs
  name="${item}"
  class="${this.selectedColor}"
  width="2rem"
  height="2rem">
</i-bs>`.trim();

  showBtnCode = (icon: string) => this.selectedIcon && icon === this.selectedIcon && this.showBtnCode;

  onShowCode(icon: string) {
    this.showCode = !this.showCode;
    this.selectedIcon = icon;
    if (!this.showCode) this.selectedIcon = null;
  }
}
