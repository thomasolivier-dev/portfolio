import { Component } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  readonly contactForm : FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required, Validators.minLength(2)]),
    message: new FormControl('', [Validators.required])
  })

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      this.contactForm.reset()
    } else {
      this.contactForm.markAllAsTouched()
    }
  }

}
