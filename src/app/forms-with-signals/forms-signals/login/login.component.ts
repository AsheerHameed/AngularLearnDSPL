import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsServiceService } from '../../forms-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  contactForm!: FormGroup;

  constructor(private formsService: FormsServiceService){}

  contactName = signal('');
  contactEmail = signal('');
  subject = signal('')
  message = signal('')

  ngOnInit() {
    this.contactForm = new FormGroup({
      contactName: new FormControl(this.contactName()),
      contactEmail: new FormControl(this.contactEmail()),
      subject: new FormControl(this.subject()),
      message: new FormControl(this.message())
    });
  }

  onSubmit() {
    console.log(this.contactForm.value);
    const contactFormData = this.contactForm.value;
    this.formsService.setContactFormData(contactFormData);
  }
}
