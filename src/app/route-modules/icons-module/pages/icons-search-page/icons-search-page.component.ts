import { Component, OnInit } from '@angular/core';
import { IconNamesEnum } from 'projects/ngx-bootstrap-icons-lib/src/lib/enums/icon-names.enum';
import { ISearch } from 'src/app/apis/api.model';
import { SubscriberComponent } from 'src/app/helpers/component';

import { IconsUseCases } from '../../icons.usecases';
import { IconsViewModel } from '../../icons.viewmodel';

export const ITEMS_PER_PAGE = 20;
@Component({
  selector: 'app-icons-search-page',
  templateUrl: './icons-search-page.component.html',
})
export class IconsSearchPageComponent extends SubscriberComponent implements OnInit {
  public readonly icons = this._viewModel.selectIcons();

  public readonly search = { skip: 0, take: ITEMS_PER_PAGE } as ISearch;

  public showDialog = false;

  public selectedIcon!: IconNamesEnum;

  constructor(
    private readonly _viewModel: IconsViewModel,
    private readonly _useCases: IconsUseCases,
  ) {
    super();
  }

  public ngOnInit(): void {
    this._setData();
  }

  public textChange(text: string): void {
    this.search.text = text;
    this._setData();
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
    // eslint-disable-next-line operator-assignment
    this.search.take = this.search.take + ITEMS_PER_PAGE;
    this._setData();
  }

  private _setData(): void {
    this.subscribe(this._useCases.setIcons(this.search));
  }
}
