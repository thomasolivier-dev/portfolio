import { Component } from '@angular/core';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { ContactSectionComponent } from './sections/contact/contact-section/contact-section.component';
import { ProjectSectionComponent } from './sections/project/project-section/project-section.component';
import { QuestionSectionComponent } from './sections/question/question-section/question-section.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, FooterComponent, ContactSectionComponent, ProjectSectionComponent, QuestionSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
