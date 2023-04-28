import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/EmailValidator.directive';

interface IUser {
  name: string;
  nickname: string;
  email: string;
  password: string;
  password2: string;
  showPassword: boolean;

}

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {
  reactiveForm: any;
  user: any;

  constructor() { 
    this.user = {} as IUser;
  }

  ngOnInit() :void{
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
