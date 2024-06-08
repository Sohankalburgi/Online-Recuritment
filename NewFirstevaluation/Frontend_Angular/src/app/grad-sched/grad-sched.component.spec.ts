import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradSchedComponent } from './grad-sched.component';

describe('GradSchedComponent', () => {
  let component: GradSchedComponent;
  let fixture: ComponentFixture<GradSchedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GradSchedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GradSchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
