import { Injectable } from '@angular/core';
import { ContactFormData } from '../shared/models/contactFormData.models';
import emailjs from '@emailjs/browser';
import { from, Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private readonly serviceId = environment.emailjs.serviceId;
  private readonly templateId = environment.emailjs.templateId;
  private readonly publicKey = environment.emailjs.publicKey;

  constructor() {
    this.initEmailJS()
  }

  private initEmailJS(): void {
    if (!this.publicKey) {
      console.error('EmailJS public key is missing');
      return;
    }
    emailjs.init(this.publicKey);
  }

  sendEmail(formData: ContactFormData): Observable<any> {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    return from(
      emailjs.send(this.serviceId, this.templateId, templateParams)
    );
  }
}
