import {
  ChangeDetectorRef, Component, ElementRef, Inject, Input, OnChanges, SimpleChanges,
} from '@angular/core';

import { IModuleConfigOptions, MODULE_CONFIG_TOKEN } from '../../config/module.config';
import { IconNamesEnum } from '../../enums/icon-names.enum';
import { Icons } from '../../providers/icon.provider';

/**
 * Bootstrap icon component.
 */
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'i-bs',
  template: '<ng-content></ng-content>',
})
export class NgxBootstrapIconsLibComponent implements OnChanges {
  /** Icon name. */
  @Input() public name!: string | IconNamesEnum;

  /** Icon width. */
  @Input() public width!: string;

  /** Icon height. */
  @Input() public height!: string;

  /** Removes default dimensions from svg. */
  @Input() public resetDefaultDimensions = false;

  constructor(
    private _elem: ElementRef,
    private _changeDetector: ChangeDetectorRef,
    @Inject(Icons) private _icons: Icons,
    @Inject(MODULE_CONFIG_TOKEN) private _config: IModuleConfigOptions,
  ) { }

  /**
   * OnChanges event.
   *
   * @param changes SimpleChanges
   */
  public ngOnChanges(changes: SimpleChanges): void {
    // eslint-disable-next-line global-require
    const camelCase = require('camelcase');
    // icons are provided as an array of objects because of "multi: true"
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const icons = Object.assign({}, ...(this._icons as any as object[]));
    let svg = icons[camelCase(changes.name.currentValue)] || '';

    if (!svg) {
      console.warn(`Icon not found: ${changes.name.currentValue}\n`);
      return;
    }

    // if config provided
    if (this._config) {
      if (this._config.width) svg = svg.replace('width="16"', `width="${this._config.width}"`);
      if (this._config.height) svg = svg.replace('height="16"', `height="${this._config.height}"`);
      if (this._config.theme) this._elem.nativeElement.classList.add(this._config.theme);
    }

    if (this.resetDefaultDimensions) {
      svg = svg.replace('width="16"', '');
      svg = svg.replace('height="16"', '');
    }

    if (this.width && svg.includes('width')) svg = svg.replace('width="16"', `width="${this.width}"`);
    if (this.height && svg.includes('height')) svg = svg.replace('height="16"', `height="${this.height}"`);

    this._elem.nativeElement.innerHTML = svg;
    this._changeDetector.markForCheck();
  }
}
