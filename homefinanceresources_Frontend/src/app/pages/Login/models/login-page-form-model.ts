import { FormElementInputCompModel } from "src/app/components/Forms/elements/models/form-element-input-comp.model";

export class LoginPageFormModel{
  constructor(){
    this.UpdateCaption('');
  }
  account :  FormElementInputCompModel=new FormElementInputCompModel();
  password: FormElementInputCompModel=new FormElementInputCompModel();
  UpdateCaption(lang:string){
    this.account.caption = "Account"
    this.password.caption ="Password"
  }
}