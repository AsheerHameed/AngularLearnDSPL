import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ListUsersComponent } from './user-list/user-list.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  {
    path: 'users',
    children: [
      {
        path: '',
        component: ListUsersComponent,
      },
      {
        path: 'add',
        component: UserAddComponent,
      },
      {
        path: 'edit/:id',
        component: UserEditComponent,
      },
      {
        path: 'user/:id',
        component: UserInfoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
