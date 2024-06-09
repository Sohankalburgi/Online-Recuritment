import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingappointComponent } from './pendingappoint.component';

describe('PendingappointComponent', () => {
  let component: PendingappointComponent;
  let fixture: ComponentFixture<PendingappointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PendingappointComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PendingappointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
