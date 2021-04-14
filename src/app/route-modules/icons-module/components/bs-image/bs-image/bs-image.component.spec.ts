import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsImageComponent } from './bs-image.component';

describe('BsImageComponent', () => {
  let component: BsImageComponent;
  let fixture: ComponentFixture<BsImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
