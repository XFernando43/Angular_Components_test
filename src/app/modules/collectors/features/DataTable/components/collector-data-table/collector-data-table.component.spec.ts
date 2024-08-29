import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorDataTableComponent } from './collector-data-table.component';

describe('CollectorDataTableComponent', () => {
  let component: CollectorDataTableComponent;
  let fixture: ComponentFixture<CollectorDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectorDataTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollectorDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
