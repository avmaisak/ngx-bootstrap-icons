import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IconNamesEnum } from 'projects/ngx-bootstrap-icons-lib/src/lib/enums/icon-names.enum';
import {
  distinctUntilChanged, first, switchMap, tap,
} from 'rxjs';
import { ITEMS_PER_PAGE } from 'src/app/constants';
import { SubscriberComponent } from 'src/app/helpers/component';

import { IconsUseCases } from '../../icons.usecases';
import { IconsViewModel } from '../../icons.viewmodel';

@Component({
  selector: 'app-icons-search-page',
  templateUrl: './icons-search-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconsSearchPageComponent extends SubscriberComponent implements OnInit {
  public readonly icons = this._viewModel.selectIcons();

  public showDialog = false;

  public selectedIcon!: IconNamesEnum;

  constructor(
    private readonly _viewModel: IconsViewModel,
    private readonly _useCases: IconsUseCases,
  ) {
    super();
  }

  public trackByIndex = (index: number): number => index;

  public ngOnInit(): void {
    this._setData();
  }

  public textChange(text: string): void {
    this.subscribe(
      this._viewModel.selectSearch().pipe(
        distinctUntilChanged(),
        tap((search) => {
          this._useCases.setSearch({ ...search, take: ITEMS_PER_PAGE, text });
          this._setData();
        }),
      ),
    );
  }

  public toggleShowDialog(): void {
    this.showDialog = !this.showDialog;
    if (!this.showDialog) {
      this.selectedIcon = null;
    }
  }

  public selectIcon(icon: IconNamesEnum): void {
    this.selectedIcon = icon;
    this.toggleShowDialog();
  }

  public scrolled(): void {
    this._nextPage();
  }

  private _nextPage(): void {
    this.subscribe(this._viewModel.selectSearch().pipe(
      first(),
      tap((search) => {
        this._useCases.setSearch({ ...search, take: search.take + ITEMS_PER_PAGE });
        this._setData();
      }),
    ));
  }

  private _setData(): void {
    this.subscribe(this._viewModel.selectSearch().pipe(
      first(),
      switchMap((search) => this._useCases.setIcons(search)),
    ));
  }
}
