import { Component, ElementRef, Input, Inject, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';

import { uppercamelcase } from '../utils/utils';
import { Icons } from '../providers/icon.provider';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'i-bs',
  template: '<ng-content></ng-content>'
})
export class NgxBootstrapIconsLibComponent implements OnChanges {

  @Input() name: string;

  constructor(
    private elem: ElementRef,
    private changeDetector: ChangeDetectorRef,
    @Inject(Icons) private icons: Icons) { }

  ngOnChanges(changes: SimpleChanges) {
    // icons are provided as an array of objects because of "multi: true"
    const icons = Object.assign({}, ...(this.icons as any as object[]));
    console.dir(icons);
    const svg = icons[uppercamelcase(changes.name.currentValue)] || '';
    console.dir(this.name);



    // tslint:disable-next-line: curly
    if (!svg) console.warn(`Icon not found: ${changes.name.currentValue}\n`);

    this.elem.nativeElement.innerHTML = svg;
    this.changeDetector.markForCheck();
  }

}
