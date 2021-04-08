import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenComponentComponent } from './screen-component.component';

describe('ScreenComponentComponent', () => {
  let component: ScreenComponentComponent;
  let fixture: ComponentFixture<ScreenComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
