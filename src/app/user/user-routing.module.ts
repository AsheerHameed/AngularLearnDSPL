import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' }, // Redirect to 'list' as the default route
  { path: 'list', component: UserListComponent },
  { path: 'add', component: UserAddComponent },
  { path: 'edit/:id', component: UserEditComponent },
  { path: 'user/:id', component: UserInfoComponent },

  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
