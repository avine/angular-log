import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvineLogComponent } from './avine-log.component';

describe('AvineLogComponent', () => {
  let component: AvineLogComponent;
  let fixture: ComponentFixture<AvineLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvineLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvineLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
