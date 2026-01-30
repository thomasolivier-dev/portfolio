import { Component, Input, Output, EventEmitter } from '@angular/core';
import { StatusType } from '../../models/status-response.model';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-status-feedback',
  imports: [CommonModule],
  templateUrl: './status-feedback.component.html',
  styleUrl: './status-feedback.component.scss'
})
export class StatusFeedbackComponent {
  @Input() message: string = 'Message envoyé';
  @Input() type: StatusType = 'success';
  @Input() show: boolean = false;
  @Output() closed = new EventEmitter<void>();

  get iconClass(): string {
    return this.type === 'success' ? 'fa-check' : 'fa-xmark';
  }

  close(): void {
    this.closed.emit();
  }
}
