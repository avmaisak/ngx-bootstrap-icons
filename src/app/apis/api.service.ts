import { Injectable } from '@angular/core';
import { chain, clone } from 'lodash';
import { IconNamesEnum } from 'projects/ngx-bootstrap-icons-lib/src/lib/enums/icon-names.enum';
import { Observable, of } from 'rxjs';

import { ISearch } from './api.model';

@Injectable({ providedIn: 'root' })
export class IconsDataService {
  public loadIcons(search: ISearch): Observable<IconNamesEnum[]> {
    let items = clone(Object.values(IconNamesEnum));

    if (search.text) {
      items = items.filter((x) => x.includes(search.text));
    }

    return of(
      chain(items)
        .drop(search.skip)
        .take(search.take)
        .value(),
    );
  }
}
