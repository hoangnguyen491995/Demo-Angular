import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmailValidatorDirective } from 'src/app/EmailValidator.directive';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent } from './Register.component';

@NgModule({
  declarations: [
    RegisterComponent,
    EmailValidatorDirective
  ], imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule
  ],
  exports: [RouterModule],
})
export class RegistersModule { }
