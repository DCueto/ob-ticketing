import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsListPageComponent } from './events-list-page.component';

describe('EventsListPageComponent', () => {
  let component: EventsListPageComponent;
  let fixture: ComponentFixture<EventsListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsListPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
