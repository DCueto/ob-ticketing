import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSessionItemComponent } from './event-session-item.component';

describe('EventSessionItemComponent', () => {
  let component: EventSessionItemComponent;
  let fixture: ComponentFixture<EventSessionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventSessionItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventSessionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
