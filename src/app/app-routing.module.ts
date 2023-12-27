import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomErrorPageComponent } from './custom-error-page/custom-error-page.component';

const routes: Routes = [
  // {
  //   path: '**',
  //   component: CustomErrorPageComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
