import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagedashComponent } from './messagedash.component';

describe('MessagedashComponent', () => {
  let component: MessagedashComponent;
  let fixture: ComponentFixture<MessagedashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessagedashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessagedashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
