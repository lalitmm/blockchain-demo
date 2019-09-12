import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovemoneyComponent } from './movemoney.component';

describe('MovemoneyComponent', () => {
  let component: MovemoneyComponent;
  let fixture: ComponentFixture<MovemoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovemoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovemoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
