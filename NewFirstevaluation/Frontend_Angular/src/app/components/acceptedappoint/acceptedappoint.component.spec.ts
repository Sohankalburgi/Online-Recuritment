import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedappointComponent } from './acceptedappoint.component';

describe('AcceptedappointComponent', () => {
  let component: AcceptedappointComponent;
  let fixture: ComponentFixture<AcceptedappointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcceptedappointComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcceptedappointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
