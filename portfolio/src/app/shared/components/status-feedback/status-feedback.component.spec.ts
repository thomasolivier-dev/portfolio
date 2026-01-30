import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusFeedbackComponent } from './status-feedback.component';

describe('StatusFeedbackComponent', () => {
  let component: StatusFeedbackComponent;
  let fixture: ComponentFixture<StatusFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusFeedbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
