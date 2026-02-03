import { Component } from '@angular/core';
import { SkillCardComponent } from '../skill-card/skill-card.component';

@Component({
  selector: 'app-skill-section',
  imports: [SkillCardComponent],
  templateUrl: './skill-section.component.html',
  styleUrl: './skill-section.component.scss'
})
export class SkillSectionComponent {

}
