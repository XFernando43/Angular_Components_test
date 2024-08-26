import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusMenuComponent } from './status-menu.component';

describe('StatusMenuComponent', () => {
  let component: StatusMenuComponent;
  let fixture: ComponentFixture<StatusMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatusMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
