import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';

import { IStoreModelState } from './models';
import { IconsStore } from './store';

@Injectable({ providedIn: 'root' })
export class IconsStoreQueries extends Query<IStoreModelState> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(store: IconsStore) {
    super(store);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  public selectIcons() {
    return this.select('icons');
  }
}
