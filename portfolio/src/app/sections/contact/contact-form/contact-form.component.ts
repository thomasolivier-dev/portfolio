import { Component } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import { EmailService } from '../../../services/email.service';
import { SpinnerComponent } from '../../../shared/components/spinner/spinner.component';
import { StatusFeedbackComponent } from '../../../shared/components/status-feedback/status-feedback.component';
import { StatusType } from '../../../shared/models/status-response.model';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, SpinnerComponent, StatusFeedbackComponent],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  public isSubmitting: boolean = false;
  public showStatus: boolean = false;
  public statusType: StatusType = 'success';
  public statusMessage: string = '';

  constructor(private emailService: EmailService) {}

  readonly contactForm : FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required, Validators.minLength(2)]),
    message: new FormControl('', [Validators.required])
  })

  onSubmit(): void {
    this.isSubmitting = true
    if (this.contactForm.valid) {
      this.emailService.sendEmail(this.contactForm.value).subscribe({
        next: (response) => {
          this.isSubmitting = false;
          this.showStatus= true;
          this.statusType= 'success';
          this.statusMessage= "Merci ! Votre message a bien été envoyé."
          // Reset form data after send email
          this.contactForm.reset();

          setTimeout(() => {
            this.showStatus = false;
          }, 3000);
        },
        error: (error) => {
          this.isSubmitting = false
          this.showStatus= true;
          this.statusType= 'error';
          
          if (error.status === 0) {
            // Problème de connexion
            this.statusMessage = "Erreur de connexion. Vérifiez votre réseau.";
          } else if (error.status >= 500) {
            // Erreur serveur
            this.statusMessage = "Erreur serveur. Réessayez dans quelques instants.";
          } else {
            // Erreur générique
            this.statusMessage = "Échec de l'envoi. Veuillez réessayer.";
          }

          console.error('❌ Erreur lors de l\'envoi', error);

          setTimeout(() => {
            this.showStatus = false;
          }, 3000);
        }
      });
    } else {
      // Mark all fields as touched to show errors
      this.contactForm.markAllAsTouched();
    }
  }
}
