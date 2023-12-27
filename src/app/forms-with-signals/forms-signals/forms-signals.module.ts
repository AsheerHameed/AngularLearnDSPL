import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsSignalsComponent } from './forms-signals.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ShowFormValuesComponent } from './show-form-values/show-form-values.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FormsSignalsComponent,
    ShowFormValuesComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[SignUpComponent,FormsSignalsComponent]
})
export class FormsSignalsModule { }
