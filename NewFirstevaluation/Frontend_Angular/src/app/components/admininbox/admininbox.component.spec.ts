import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmininboxComponent } from './admininbox.component';

describe('AdmininboxComponent', () => {
  let component: AdmininboxComponent;
  let fixture: ComponentFixture<AdmininboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmininboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmininboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
