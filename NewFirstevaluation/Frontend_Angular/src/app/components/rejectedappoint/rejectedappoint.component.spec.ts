import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedappointComponent } from './rejectedappoint.component';

describe('RejectedappointComponent', () => {
  let component: RejectedappointComponent;
  let fixture: ComponentFixture<RejectedappointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RejectedappointComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RejectedappointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
