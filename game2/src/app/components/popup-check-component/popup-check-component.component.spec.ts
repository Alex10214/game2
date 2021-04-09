import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCheckComponentComponent } from './popup-check-component.component';

describe('PopupCheckComponentComponent', () => {
  let component: PopupCheckComponentComponent;
  let fixture: ComponentFixture<PopupCheckComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupCheckComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupCheckComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
