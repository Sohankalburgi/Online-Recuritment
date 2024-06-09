import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusappointComponent } from './statusappoint.component';

describe('StatusappointComponent', () => {
  let component: StatusappointComponent;
  let fixture: ComponentFixture<StatusappointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatusappointComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatusappointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
