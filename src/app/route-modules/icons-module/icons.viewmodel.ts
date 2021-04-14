import { Injectable } from '@angular/core';
import { IconNamesEnum } from 'ngx-bootstrap-icons';
import { Observable } from 'rxjs';
import { IconsStoreQueries } from 'src/app/stores/icons-store/queries';

@Injectable({ providedIn: 'root' })
export class IconsViewModel {
  constructor(private _queries: IconsStoreQueries) { }

  public selectIcons(): Observable<IconNamesEnum[]> {
    return this._queries.selectIcons();
  }
}
