import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-tooltip',
  imports: [],
  templateUrl: './image-tooltip.component.html',
  styleUrl: './image-tooltip.component.scss'
})
export class ImageTooltipComponent {
  @Input() imagePath!: string;
  @Input() technoName!: string;
  @Input() technoDesc!: string;
  
}
