import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/Login/login-page/login-page.component';
import { FormWrapCompComponent } from './components/Forms/wrap/form-wrap-comp/form-wrap-comp.component';
import { FormElementInputCompComponent } from './components/Forms/elements/form-element-input-comp/form-element-input-comp.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    FormWrapCompComponent,
    FormElementInputCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
