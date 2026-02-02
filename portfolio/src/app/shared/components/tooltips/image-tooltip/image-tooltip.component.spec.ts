import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTooltipComponent } from './image-tooltip.component';

describe('ImageTooltipComponent', () => {
  let component: ImageTooltipComponent;
  let fixture: ComponentFixture<ImageTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageTooltipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
