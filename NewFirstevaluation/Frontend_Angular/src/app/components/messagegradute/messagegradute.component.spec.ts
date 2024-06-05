import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagegraduteComponent } from './messagegradute.component';

describe('MessagegraduteComponent', () => {
  let component: MessagegraduteComponent;
  let fixture: ComponentFixture<MessagegraduteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessagegraduteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessagegraduteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
