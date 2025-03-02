import { Component, OnInit } from '@angular/core';
import { LoginPageFormModel } from '../models/login-page-form-model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  formParameter: LoginPageFormModel = new LoginPageFormModel();
  constructor() { }

  ngOnInit(): void {
  }
  setAccountValue(value: string) {
    console.log("setAccountValue " + value)
  }
  setPasswordValue(value: string) {
    console.log("setPasswordValue " + value)
  }
}
