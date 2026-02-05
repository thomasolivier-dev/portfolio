import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-section',
  imports: [],
  templateUrl: './home-section.component.html',
  styleUrl: './home-section.component.scss'
})
export class HomeSectionComponent {
  @ViewChild('typingTitle') typingTitle!: ElementRef;

  ngAfterViewInit() {
    this.restartAnimation();

    setInterval(() => {
      this.restartAnimation();
    }, 10000);
  }

  restartAnimation() {
    const el = this.typingTitle.nativeElement;

    el.classList.remove('h3-typing');
    void el.offsetWidth;
    el.classList.add('h3-typing');
  }
}
