import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageStatusButtonComponent } from './message-status-button.component';

describe('MessageStatusButtonComponent', () => {
  let component: MessageStatusButtonComponent;
  let fixture: ComponentFixture<MessageStatusButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageStatusButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessageStatusButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
