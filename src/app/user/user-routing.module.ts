import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ListUsersComponent } from './user-list/user-list.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { CustomErrorPageComponent } from '../custom-error-page/custom-error-page.component';
import { TodoListComponent } from '../to-do-list/todo-list/todo-list.component';

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
      {
        path: 'users/**',
        component: CustomErrorPageComponent,
      },
    ],
  },
  {
    path: 'to-do',
    component: TodoListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
