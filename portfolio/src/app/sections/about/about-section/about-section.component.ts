import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-about-section',
  imports: [LucideAngularModule],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})
export class AboutSectionComponent {
  public readonly descriptionText: string = `
    Développeur full-stack diplômé d’un master en génie logiciel, je suis spécialisé en Java, Angular et en gestion de bases de données. J’accorde une grande importance à la qualité du code, à la sécurité et à la maintenabilité des applications que je développe.

    J’ai également de bonnes bases en Python, React et en intelligence artificielle, ce qui me permet d’explorer de nouvelles approches et de m’adapter facilement à différents environnements techniques.

    Passionné par le développement logiciel, je cherche constamment à améliorer mes compétences afin de concevoir des applications fiables, performantes et pensées pour évoluer dans le temps.
  `.trim();
}

