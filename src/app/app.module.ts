import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { UserRoutingModule } from './user/user-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomErrorPageComponent } from './custom-error-page/custom-error-page.component';
import { ToDoListModule } from './to-do-list/to-do-list.module';

@NgModule({
  declarations: [AppComponent, CustomErrorPageComponent],
  imports: [
    BrowserModule,
    UserRoutingModule,
    UserModule,
    BrowserAnimationsModule,
    ToDoListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
