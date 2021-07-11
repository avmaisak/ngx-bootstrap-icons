import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

import { createInitialState } from './helpers';
import { IStoreModelState } from './models';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'icons', resettable: true })
export class IconsStore extends Store<IStoreModelState> {
  constructor() {
    super(createInitialState());
  }
}
