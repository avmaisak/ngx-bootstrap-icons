import { Injectable } from '@angular/core';
import { IconNamesEnum } from 'projects/ngx-bootstrap-icons-lib/src/public-api';
import { Observable } from 'rxjs';
import { ISearch } from 'src/app/apis/api.model';
import { IconsStoreService } from 'src/app/stores/icons-store/service';

@Injectable({ providedIn: 'root' })
export class IconsUseCases {
  constructor(private _service: IconsStoreService) { }

  public setIcons(search: ISearch): Observable<void> {
    return this._service.setIcons(search);
  }

  public setSearch(search: ISearch): void {
    this._service.setSearch(search);
  }

  public setSelectedIcon(icon: IconNamesEnum): void {
    this._service.setSelectedIcon(icon);
  }

  public resetSelectedIcon(): void {
    this._service.resetSelectedIcon();
  }
}
