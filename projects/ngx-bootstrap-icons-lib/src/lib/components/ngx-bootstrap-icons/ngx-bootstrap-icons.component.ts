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
  ICON_NOT_FOUND: 'Icon not found',
};

enum DIMENSION_TYPE {
  WIDTH = 'width',
  HEIGHT = 'height',
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
      this.logMessage(this.setIconMessage(MESSAGE.ICON_NOT_FOUND, changes.name.currentValue));
      return;
    }

    // if config provided
    if (this._config) {
      if (this._config.width) {
        svg = svg.replace(
          this.setSize(DIMENSION_TYPE.WIDTH),
          this.setSize(
            DIMENSION_TYPE.WIDTH,
            this._config.width,
          ),
        );
      }

      if (this._config.height) {
        svg = svg.replace(
          this.setSize(DIMENSION_TYPE.HEIGHT),
          this.setSize(
            DIMENSION_TYPE.HEIGHT,
            this._config.height,
          ),
        );
      }

      if (this._config.theme) {
        this._elem.nativeElement.classList.add(this._config.theme);
      }
    }

    if (this.resetDefaultDimensions) {
      svg = svg.replace(this.setSize(DIMENSION_TYPE.WIDTH), '');
      svg = svg.replace(this.setSize(DIMENSION_TYPE.HEIGHT), '');
    }

    if (this.width && svg.includes(DIMENSION_TYPE.WIDTH)) {
      svg = svg.replace(
        this.setSize(DIMENSION_TYPE.WIDTH),
        this.setSize(
          DIMENSION_TYPE.WIDTH,
          this.width,
        ),
      );
    }

    if (this.height && svg.includes(DIMENSION_TYPE.HEIGHT)) {
      svg = svg.replace(
        this.setSize(DIMENSION_TYPE.HEIGHT),
        this.setSize(
          DIMENSION_TYPE.HEIGHT,
          this.height,
        ),
      );
    }

    this._elem.nativeElement.innerHTML = svg;
    this._changeDetector.markForCheck();
  }

  private setSize = (type: DIMENSION_TYPE, size: number | string = DEFAULT_SIZE): string => `${type}="${size}"`;

  private setIconMessage = (message: string, icon: string) => `${message}: ${icon}\n`;

  private logMessage = (message: string) => console.warn(message);
}
