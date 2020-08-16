import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { icons } from './icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  itemsDefault = [];
  items = icons;
  search: string;

  private _init = () => this.itemsDefault = _.clone(this.items);

  ngOnInit(): void { this._init(); }

  onSearch = () => {

    if (this.search) this.items = this.items.filter(x => x.includes(this.search.trim()));
    if (!this.search) {
      this.items = _.clone(this.itemsDefault);
      return;
    }

  }

  onClear() {
    this.search = null;
    this.items = _.clone(this.itemsDefault);
  }

}
