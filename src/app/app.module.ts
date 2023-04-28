import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmailValidatorDirective } from './EmailValidator.directive';
import { DemoComponentComponent } from './demo-component/demo-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from './demo-component/service/service.service';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routing/Home/Home.component';
import { InfoComponent } from './routing/Info/Info.component';
import { RegisterComponent } from './routing/Register/Register.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'info', component: InfoComponent },
];



@NgModule({
  declarations: [
    AppComponent,
    EmailValidatorDirective,
    DemoComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
