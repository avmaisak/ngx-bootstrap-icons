import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { icons } from './icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  itemsDefault = [];
  items = icons;
  search: string;

  ngOnInit(): void {
    this.itemsDefault = _.clone(this.items);
  }

  onSearch = () => {

    if (!this.search) {
      this.items = _.clone(this.itemsDefault);
      return;
    }

    this.items = this.items.filter(x => x.includes(this.search.trim()));
  }

}
