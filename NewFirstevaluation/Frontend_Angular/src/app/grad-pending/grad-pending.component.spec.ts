import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradPendingComponent } from './grad-pending.component';

describe('GradPendingComponent', () => {
  let component: GradPendingComponent;
  let fixture: ComponentFixture<GradPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GradPendingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GradPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
