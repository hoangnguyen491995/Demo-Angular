import { Injectable } from '@angular/core';
import { reduce } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService  {
  static getMessage(): string | undefined {
    throw new Error('Method not implemented.');
  }

  constructor() { }

   getMessage(): string {
    console.log("test service");
    return "test" ;
  }

}
