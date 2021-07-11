import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { IconNamesEnum } from 'projects/ngx-bootstrap-icons-lib/src/lib/enums/icon-names.enum';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { notNullOrUndefined } from './helpers';
import { IStoreModelState } from './models';
import { IconsStore } from './store';

@Injectable({ providedIn: 'root' })
export class IconsStoreQueries extends Query<IStoreModelState> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(store: IconsStore) {
    super(store);
  }

  public selectIcons(): Observable<IconNamesEnum[]> {
    return this.select('icons').pipe(
      filter(notNullOrUndefined),
    );
  }
}
