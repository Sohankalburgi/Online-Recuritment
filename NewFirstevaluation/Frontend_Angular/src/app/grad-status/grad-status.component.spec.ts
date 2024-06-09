import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradStatusComponent } from './grad-status.component';

describe('GradStatusComponent', () => {
  let component: GradStatusComponent;
  let fixture: ComponentFixture<GradStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GradStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GradStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
