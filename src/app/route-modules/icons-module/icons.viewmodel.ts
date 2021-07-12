import { Injectable } from '@angular/core';
import { IconsStoreQueries } from 'src/app/stores/icons-store/queries';

@Injectable({ providedIn: 'root' })
export class IconsViewModel {
  constructor(private _queries: IconsStoreQueries) { }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  public selectIcons() {
    return this._queries.selectIcons();
  }
}
