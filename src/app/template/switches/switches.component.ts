import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent {

  public title: string = 'Switches';

  person = {
    gender: 'F',
    notifications: true
  }

  termsConditions: boolean = false;
  

}
