import { Component, OnInit } from '@angular/core';
import { IconNamesEnum } from 'ngx-bootstrap-icons';
import { ISearch } from 'src/app/apis/api.model';
import { SubscriberComponent } from 'src/app/helpers/component';

import { IconsUseCases } from '../../icons.usecases';
import { IconsViewModel } from '../../icons.viewmodel';

@Component({
  selector: 'app-icons-search-page',
  templateUrl: './icons-search-page.component.html',
  styleUrls: ['./icons-search-page.component.scss'],
})
export class IconsSearchPageComponent extends SubscriberComponent implements OnInit {
  public readonly icons = this._viewModel.selectIcons();

  public readonly search = { skip: 0, take: 20 } as ISearch;

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

  public nextPage(): void {
    // eslint-disable-next-line operator-assignment
    this.search.take = this.search.take + this.search.take;
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

  private _setData(): void {
    this.subscribe(this._useCases.setIcons(this.search));
  }
}
