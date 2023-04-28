
import { Component, Input, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChange, SimpleChanges, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup,  FormBuilder , FormControl, Validators  } from '@angular/forms';
import { ServiceService } from './service/service.service';

@Component({
  selector: 'app-demo-component',
  templateUrl: './demo-component.component.html',
  styleUrls: ['./demo-component.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class DemoComponentComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, OnChanges {

  email: string | undefined;
  phone: string | undefined;
  password: string | undefined;
  password2: string | undefined;
  registerForm: FormGroup | undefined;
  formBuilder: any;
  form: FormGroup = new FormGroup({
    // form controls here
    email: new FormControl('', [Validators.required, Validators.email]),
  })
  login(): void {
    console.log(`Username: ${this.email}, Password: ${this.password}`);
  }

  constructor() {
    console.log('1: Constructor');
  }
  ngOnInit() {
    console.log('3: ngOnInit');
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      password2: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
      //  this.email= ServiceService.getMessage();
  }

  onSubmit() { 

  }
  

  @Input() title: string | undefined;


  @Input() inputValue: string | undefined;

  @Output() buttonClicked: EventEmitter<number> = new EventEmitter<number>();

  onbuttonClicked() {
    this.buttonClicked.emit(1213);
    // this.text = "Change from hello component"

  }
  ngAfterContentInit() {
    console.log('5: ngAfterContentInit');
  }


  ngDoCheck(): void {
    console.log('4: ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {

    console.log('2: ngOnChanges' + JSON.stringify(changes));

    console.log("Input Value changed:", changes);
  }


  ngAfterContentChecked() {
    console.log('6: ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('7: ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('8: ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('9: ngOnDestroy');
  }

  user = {
    id: '1',
    name: 'Hung',
    age: 22,
    class: '12A4',
    info: "https://viblo.asia/p/cung-tim-hieu-ve-component-trong-angular-ORNZq1gqZ0n#_khoi-tao-component-1"
  };

  count = 0;

  increase() {
    this.count++;
  }




}
