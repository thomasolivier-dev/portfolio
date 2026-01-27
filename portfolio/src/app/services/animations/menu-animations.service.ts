import { Injectable } from '@angular/core';
import { 
  trigger, 
  transition, 
  style, 
  animate, 
  AnimationTriggerMetadata 
} from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class MenuAnimationsService {

  // Animation slide depuis la droite
  static slideFromright: AnimationTriggerMetadata = trigger('slideFromRight', [
    transition(':enter', [
      style({ transform: 'translateX(100%)', opacity: 0 }),
      animate('400ms cubic-bezier(0.35, 0, 0.25, 1)', 
        style({ transform: 'translateX(0)', opacity: 1 }))
    ]),
    transition(':leave', [
      animate('300ms ease-in', 
        style({ transform: 'translateX(100%)', opacity: 0 }))
    ])
  ]);
}
