import { Component } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import { EmailService } from '../../../services/email.service';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  constructor(private emailService: EmailService) {}

  readonly contactForm : FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required, Validators.minLength(2)]),
    message: new FormControl('', [Validators.required])
  })

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.emailService.sendEmail(this.contactForm.value).subscribe({
        next: (response) => {
          console.log('✅ Email envoyé avec succès', response);
          // Reset form data after send email
          this.contactForm.reset();
        },
        error: (error) => {
          console.error('❌ Erreur lors de l\'envoi', error);
        }
      });
    } else {
      // Mark all fields as touched to show errors
      this.contactForm.markAllAsTouched();
    }
  }
}
