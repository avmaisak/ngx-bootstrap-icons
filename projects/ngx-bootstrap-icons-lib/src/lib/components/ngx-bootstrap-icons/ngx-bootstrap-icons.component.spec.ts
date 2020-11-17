import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBootstrapIconsLibComponent } from './ngx-bootstrap-icons.component';

describe('NgxBootstrapIconsLibComponent', () => {
  let component: NgxBootstrapIconsLibComponent;
  let fixture: ComponentFixture<NgxBootstrapIconsLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxBootstrapIconsLibComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBootstrapIconsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
