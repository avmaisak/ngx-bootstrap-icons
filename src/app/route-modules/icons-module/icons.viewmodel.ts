import { Injectable } from '@angular/core';
import { IconNamesEnum } from 'projects/ngx-bootstrap-icons-lib/src/public-api';
import { Observable } from 'rxjs';
import { ISearch } from 'src/app/apis/api.model';
import { IconsStoreQueries } from 'src/app/stores/icons-store/queries';

@Injectable({ providedIn: 'root' })
export class IconsViewModel {
  constructor(private _queries: IconsStoreQueries) { }

  public selectIcons(): Observable<IconNamesEnum[]> {
    return this._queries.selectIcons();
  }

  public selectSearch(): Observable<ISearch> {
    return this._queries.selectSearch();
  }

  public selectSelectedIcon(): Observable<IconNamesEnum> {
    return this._queries.selectSelectedIcon();
  }
}
