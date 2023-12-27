import { Component, ComponentFactoryResolver, Injector } from '@angular/core';
import { ShowFormValuesComponent } from './show-form-values/show-form-values.component';
import { LoginComponent } from './login/login.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsServiceService } from '../forms-service.service';

@Component({
  selector: 'app-forms-signals',
  templateUrl: './forms-signals.component.html',
  styleUrls: ['./forms-signals.component.scss']
})
export class FormsSignalsComponent {
 component: any;
  detectComponent(component: any) {
    if (component === 'Login') {
      this.component = LoginComponent;
    } else if (component === 'Info') {
      this.component = ShowFormValuesComponent;
    }else if (component === 'Signup'){
      this.component = SignUpComponent;
    }
  }
}
