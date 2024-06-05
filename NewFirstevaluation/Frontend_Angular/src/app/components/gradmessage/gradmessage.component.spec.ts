import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradmessageComponent } from './gradmessage.component';

describe('GradmessageComponent', () => {
  let component: GradmessageComponent;
  let fixture: ComponentFixture<GradmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GradmessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GradmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
