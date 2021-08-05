import { Injectable } from '@angular/core';
import { IconNamesEnum } from 'projects/ngx-bootstrap-icons-lib/src/public-api';
import { Observable } from 'rxjs';
import { mapTo, tap } from 'rxjs/operators';
import { ISearch } from 'src/app/apis/api.model';
import { IconsDataService } from 'src/app/apis/api.service';

import { IconsStore } from './store';

@Injectable({ providedIn: 'root' })
export class IconsStoreService {
  constructor(private _store: IconsStore, private _data: IconsDataService) { }

  public setIcons(search: ISearch): Observable<void> {
    return this._data.loadIcons(search).pipe(
      tap((icons) => this._store.update({ icons: icons as IconNamesEnum[] })),
      // eslint-disable-next-line no-void
      mapTo(void 0),
    );
  }

  public setSearch(search: ISearch): void {
    this._store.update({ search });
  }
}
