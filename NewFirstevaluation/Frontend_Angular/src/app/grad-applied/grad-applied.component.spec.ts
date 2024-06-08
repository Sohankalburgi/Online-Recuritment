import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradAppliedComponent } from './grad-applied.component';

describe('GradAppliedComponent', () => {
  let component: GradAppliedComponent;
  let fixture: ComponentFixture<GradAppliedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GradAppliedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GradAppliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
