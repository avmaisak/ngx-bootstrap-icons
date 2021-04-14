import { Injectable } from '@angular/core';
import { chain, clone } from 'lodash';
import { IconNamesEnum } from 'ngx-bootstrap-icons';
import { Observable, of } from 'rxjs';

import { ISearch } from './api.model';

export const ITEMS = Object.values(IconNamesEnum);

@Injectable({ providedIn: 'root' })
export class ApiService {
  public getIcons(search: ISearch): Observable<IconNamesEnum[]> {
    let items = clone(ITEMS);

    if (search.text) items = items.filter((x) => x.includes(search.text));

    const res = chain(items)
      .drop(search.skip)
      .take(search.take)
      .value();
    return of(res);
  }
}
