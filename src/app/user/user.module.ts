import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAddComponent } from './user-add/user-add.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserComponent } from './user.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select'; // Import MatSelectModule
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
 
@NgModule({
  declarations: [
    UserAddComponent,
    UserListComponent,
    UserEditComponent,
    UserComponent,
    
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatCardModule, // Add MatCardModule to the imports array
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule 
  ],
  exports:[UserAddComponent]
})
export class UserModule { }
