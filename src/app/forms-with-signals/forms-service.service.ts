import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormsServiceService {

  private formData: any;
  private contactFormData: any;

  setFormData(data: any) {
    this.formData = data;
  }

  getFormData() {
    return this.formData;
  }
  setContactFormData(data: any) {
    this.contactFormData = data;
  }
  getContactFormData() {
    return this.contactFormData;
  }
}
