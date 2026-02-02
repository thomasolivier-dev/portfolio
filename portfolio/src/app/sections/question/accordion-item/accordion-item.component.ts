import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  imports: [],
  templateUrl: './accordion-item.component.html',
  styleUrl: './accordion-item.component.scss'
})
export class AccordionItemComponent {
  @Input() question!: string;
  @Input() anwser!: string;
  public isOpen: boolean = false;

  public toggle(): void {
    this.isOpen = !this.isOpen;
  }
}
