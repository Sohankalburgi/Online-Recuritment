import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDescComponent } from './job-desc.component';

describe('JobDescComponent', () => {
  let component: JobDescComponent;
  let fixture: ComponentFixture<JobDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobDescComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
