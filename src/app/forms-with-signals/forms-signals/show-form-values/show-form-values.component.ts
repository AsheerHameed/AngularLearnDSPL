import { Component, Output } from '@angular/core';
import { FormsServiceService } from '../../forms-service.service';

@Component({
  selector: 'app-show-form-values',
  templateUrl: './show-form-values.component.html',
  styleUrls: ['./show-form-values.component.scss']
})
export class ShowFormValuesComponent {
  formData: any;
  contactFormData:any;
  constructor(private dataService: FormsServiceService) {}
  ngOnInit() {
    // Get the form data from the service
    this.formData = this.dataService.getFormData();
    this.contactFormData = this.dataService.getContactFormData();
    
  }
}
