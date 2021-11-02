import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import {
  IModuleConfigOptions,
  MODULE_CONFIG_TOKEN,
} from '../../config/module.config';
import { IconNamesEnum } from '../../enums/icon-names.enum';
import { toCamelCase } from '../../internal/utils/toCamelCase';
import { Icons } from '../../providers/icon.provider';
import { IconName } from '../../types/icon-names.type';

const DEFAULT_SIZE = 16;
const MESSAGE = {
  iconNotFound: 'Icon not found',
};

enum DimensionType {
  Width = 'width',
  Height = 'height',
}

/**
 * Bootstrap icon component.
 */
@Component({
  selector: 'i-bs, *[i-bs]',
  template: '<ng-content></ng-content>',
})
export class NgxBootstrapIconsLibComponent implements OnChanges {
  /** Icon name. */
  @Input()
  public name!: IconNamesEnum | IconName;

  /** Icon width. */
  @Input()
  public width!: string;

  /** Icon height. */
  @Input()
  public height!: string;

  /** Removes default dimensions from svg. */
  @Input()
  public resetDefaultDimensions = false;

  constructor(
    private _elem: ElementRef,
    private _changeDetector: ChangeDetectorRef,
    @Inject(Icons) private _icons: Icons,
    @Inject(MODULE_CONFIG_TOKEN) private _config: IModuleConfigOptions,
  ) {
  }

  /**
   * OnChanges event.
   *
   * @param changes SimpleChanges
   */
  public ngOnChanges(changes: SimpleChanges): void {
    // icons are provided as an array of objects because of "multi: true"
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const icons = Object.assign({}, ...(this._icons as any as object[]));
    let svg = icons[toCamelCase(changes.name.currentValue)] || '';

    if (!svg) {
      this._logMessage(this._setIconMessage(MESSAGE.iconNotFound, changes.name.currentValue));
      return;
    }

    // if config provided
    if (this._config) {
      if (this._config.width) {
        svg = svg.replace(
          this._setSize(DimensionType.Width),
          this._setSize(
            DimensionType.Width,
            this._config.width,
          ),
        );
      }

      if (this._config.height) {
        svg = svg.replace(
          this._setSize(DimensionType.Height),
          this._setSize(
            DimensionType.Height,
            this._config.height,
          ),
        );
      }

      if (this._config.theme) {
        this._elem.nativeElement.classList.add(this._config.theme);
      }
    }

    if (this.resetDefaultDimensions) {
      svg = svg.replace(this._setSize(DimensionType.Width), '');
      svg = svg.replace(this._setSize(DimensionType.Height), '');
    }

    if (this.width && svg.includes(DimensionType.Width)) {
      svg = svg.replace(
        this._setSize(DimensionType.Width),
        this._setSize(
          DimensionType.Width,
          this.width,
        ),
      );
    }

    if (this.height && svg.includes(DimensionType.Height)) {
      svg = svg.replace(
        this._setSize(DimensionType.Height),
        this._setSize(
          DimensionType.Height,
          this.height,
        ),
      );
    }

    this._elem.nativeElement.innerHTML = svg;
    this._changeDetector.markForCheck();
  }

  private _setSize = (type: DimensionType, size: number | string = DEFAULT_SIZE): string => `${type}="${size}"`;

  private _setIconMessage = (message: string, icon: string): string => `${message}: ${icon}\n`;

  private _logMessage = (message: string): void => console.warn(message);
}
