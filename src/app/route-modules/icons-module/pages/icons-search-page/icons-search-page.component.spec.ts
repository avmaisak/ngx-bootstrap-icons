import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsSearchPageComponent } from './icons-search-page.component';

describe('IconsSearchPageComponent', () => {
  let component: IconsSearchPageComponent;
  let fixture: ComponentFixture<IconsSearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconsSearchPageComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
