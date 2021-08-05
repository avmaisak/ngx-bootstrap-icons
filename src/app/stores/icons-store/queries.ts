import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { IconNamesEnum } from 'projects/ngx-bootstrap-icons-lib/src/public-api';
import { Observable } from 'rxjs';
import { ISearch } from 'src/app/apis/api.model';

import { IStoreModelState } from './models';
import { IconsStore } from './store';

@Injectable({ providedIn: 'root' })
export class IconsStoreQueries extends Query<IStoreModelState> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(store: IconsStore) {
    super(store);
  }

  public selectIcons(): Observable<IconNamesEnum[]> {
    return this.select('icons');
  }

  public selectSearch(): Observable<ISearch> {
    return this.select('search');
  }
}
