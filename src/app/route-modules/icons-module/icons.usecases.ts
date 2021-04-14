import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISearch } from 'src/app/apis/api.model';
import { IconsStoreService } from 'src/app/stores/icons-store/service';

@Injectable({ providedIn: 'root' })
export class IconsUseCases {
  constructor(private _service: IconsStoreService) { }

  public setIcons(search: ISearch): Observable<void> {
    return this._service.setIcons(search);
  }
}
