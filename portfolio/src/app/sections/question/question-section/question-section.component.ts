import { Component } from '@angular/core';
import { AccordionItemComponent } from '../accordion-item/accordion-item.component';
import { QuestionService } from '../../../services/question.service';
import { questionAnwser } from '../../../shared/models/questionAnwser.model';

@Component({
  selector: 'app-question-section',
  imports: [AccordionItemComponent],
  templateUrl: './question-section.component.html',
  styleUrl: './question-section.component.scss'
})
export class QuestionSectionComponent {
  public questionList: questionAnwser[] = [];

  constructor(private questionService : QuestionService) {}

  ngOnInit() {
    this.questionService.loadQuestions().subscribe(questions => {
      this.questionList = questions;
    });
  }

}
