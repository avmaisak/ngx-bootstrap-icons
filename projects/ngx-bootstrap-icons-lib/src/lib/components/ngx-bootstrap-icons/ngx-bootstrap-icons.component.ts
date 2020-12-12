import {
  ChangeDetectorRef, Component, ElementRef, Inject, Input, OnChanges, SimpleChanges,
} from '@angular/core';
import { IconNamesEnum } from '../../enums/icon-names.enum';
import { Icons } from '../../providers/icon.provider';
import { uppercamelcase } from '../../utils/utils';

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
  @Input() name!: string | IconNamesEnum;

  /** Icon width. */
  @Input() width!: string;

  /** Icon height. */
  @Input() height!: string;

  constructor(
    private elem: ElementRef,
    private changeDetector: ChangeDetectorRef,
    @Inject(Icons)
    private icons: Icons,
  ) { }

  /**
   * OnChanges event.
   *
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges) {
    // icons are provided as an array of objects because of "multi: true"
    const icons = Object.assign({}, ...(this.icons as any as object[]));
    let svg = icons[uppercamelcase(changes.name.currentValue)] || '';

    if (!svg) console.warn(`Icon not found: ${changes.name.currentValue}\n`);
    if (this.width && svg.includes('width')) svg = svg.replace('width="16"', `width="${this.width}"`);
    if (this.height && svg.includes('height')) svg = svg.replace('height="16"', `height="${this.height}"`);

    this.elem.nativeElement.innerHTML = svg;
    this.changeDetector.markForCheck();
  }
}
