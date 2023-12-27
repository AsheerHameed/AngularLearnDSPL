import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { UserRoutingModule } from './user/user-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomErrorPageComponent } from './custom-error-page/custom-error-page.component';
import { ToDoListModule } from './to-do-list/to-do-list.module';
import { PocModule } from './poc/poc.module';
import { FormsSignalsModule } from './forms-with-signals/forms-signals/forms-signals.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CustomErrorPageComponent],
  imports: [
    BrowserModule,
    UserRoutingModule,
    UserModule,
    BrowserAnimationsModule,
    ToDoListModule,
    PocModule,
    FormsModule,
    FormsSignalsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
