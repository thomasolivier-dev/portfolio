import { Component } from '@angular/core';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { ContactSectionComponent } from './sections/contact/contact-section/contact-section.component';
import { ProjectSectionComponent } from './sections/project/project-section/project-section.component';
import { QuestionSectionComponent } from './sections/question/question-section/question-section.component';
import { SkillSectionComponent } from './sections/skill/skill-section/skill-section.component';
import { StarBackgroundComponent } from './shared/components/background/star-background/star-background.component';
import { HomeSectionComponent } from './sections/home/home-section/home-section.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, FooterComponent, ContactSectionComponent, ProjectSectionComponent, QuestionSectionComponent,
    SkillSectionComponent, StarBackgroundComponent, HomeSectionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
