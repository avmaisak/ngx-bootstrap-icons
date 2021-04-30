import { Injectable } from '@angular/core';
import { IconNamesEnum } from 'projects/ngx-bootstrap-icons-lib/src/public-api';
import { Observable } from 'rxjs';
import { mapTo, tap } from 'rxjs/operators';
import { ISearch } from 'src/app/apis/api.model';
import { ApiService } from 'src/app/apis/api.service';

import { IconsStore } from './store';

@Injectable({ providedIn: 'root' })
export class IconsStoreService {
  constructor(private _iconsStore: IconsStore, private _api: ApiService) { }

  public setIcons(search: ISearch): Observable<void> {
    return this._api.getIcons(search).pipe(
      tap((icons) => this._iconsStore.update({ icons: icons as IconNamesEnum[] })),
      // eslint-disable-next-line no-void
      mapTo(void 0),
    );
  }
}
