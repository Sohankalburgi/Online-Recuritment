import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradinboxComponent } from './gradinbox.component';

describe('GradinboxComponent', () => {
  let component: GradinboxComponent;
  let fixture: ComponentFixture<GradinboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GradinboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GradinboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
