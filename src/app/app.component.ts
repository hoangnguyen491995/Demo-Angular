import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChildren, QueryList, OnInit  } from '@angular/core';
import { DemoComponentComponent } from './demo-component/demo-component.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from './EmailValidator.directive';
import { ServiceService } from './demo-component/service/service.service';

interface IUser {
  name: string;
  nickname: string;
  email: string;
  password: string;
  password2: string;
  showPassword: boolean;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterContentInit , OnInit {
  title = 'angular-demo';
  reactiveForm: any;
  user: any;
  
  onButtonClicked(event :any): void{
    console.log("parent",event);
}

 
inputValue: string = '';

@ContentChildren(DemoComponentComponent) myChildComponents: QueryList<DemoComponentComponent> | undefined;

ngAfterContentInit() {
}

condition : boolean = false ;

demongOnDestroy(){
        this.condition=!this.condition;
}


// reactiveForm!: FormGroup;
// user: IUser;

constructor(private text : ServiceService) {
  this.user = {} as IUser;
}

ngOnInit(): void {
  console.log(ServiceService.getMessage);
  this.reactiveForm = new FormGroup({
    name: new FormControl(this.user.name, [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(250),
    ]),
    nickname: new FormControl(this.user.nickname, [
      Validators.maxLength(10),
    ]),
    email: new FormControl(this.user.email, [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(250),
      emailValidator(),
    ]),
    password: new FormControl(this.user.password, [
      Validators.required,
      Validators.minLength(15),
    ]),
    password2: new FormControl(this.user.password2, [
      Validators.required,
      Validators.minLength(15),

    ]),
  });
}

get name() {
  return this.reactiveForm.get('name')!;
}

get nickname() {
  return this.reactiveForm.get('nickname')!;
}

get email() {
  return this.reactiveForm.get('email')!;
}

get password() {
  return this.reactiveForm.get('password')!;
}

get password2() {
  return this.reactiveForm.get('password2')!;
}


public validate(): void {

  console.info('Name:', this.user.name);
  console.info('Nickname:', this.user.nickname);
  console.info('Email:', this.user.email);
  console.info('Password:', this.user.password);
  console.info('Password2:', this.user.password2);

  if (this.reactiveForm.invalid) {
    for (const control of Object.keys(this.reactiveForm.controls)) {
      this.reactiveForm.controls[control].markAsTouched();
    }
    return;
  }


  this.user = this.reactiveForm.value;

  console.info('Name:', this.user.name);
  console.info('Nickname:', this.user.nickname);
  console.info('Email:', this.user.email);
  console.info('Password:', this.user.password);
}


}
