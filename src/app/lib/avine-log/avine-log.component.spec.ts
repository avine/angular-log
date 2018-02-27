import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvnStepperComponent } from './avine-log.component';

describe('AvineLogComponent', () => {
  let component: AvnStepperComponent;
  let fixture: ComponentFixture<AvnStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvnStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvnStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
