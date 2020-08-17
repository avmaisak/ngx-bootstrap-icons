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

  private _getItems = () => this.items = _.clone(icons);

  ngOnInit(): void { this._getItems(); }

  onSearch = () => {
    if (this.search) this.items = _.clone(icons).filter((x) => x.includes(this.search.trim()));
    if (!this.search) {
      this._getItems();
      return;
    }
  }

  onClear() {
    this.search = null;
    this._getItems();
  }

  getHtmlCode = (item: string) => `<i-bs
  [name]="${item}"
  class="text-primary"
  width="2rem"
  height="2rem">
</i-bs>`.trim();

  showBtnCode = (icon: string) => this.selectedIcon && icon === this.selectedIcon && this.showBtnCode;

  onShowCode(icon: string) {
    this.showCode = !this.showCode;
    this.selectedIcon = icon;
    if (!this.showCode) {
      this.selectedIcon = null;
      return;
    }
  }
}
