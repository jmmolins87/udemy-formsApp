import { Component } from '@angular/core';
import { MenuItem } from '../interface/sidemenu.interface';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
  ]
})
export class SidemenuComponent {

  public templateTitle: string = 'Template';
  public templateMenu: MenuItem[] = [
    {
      text: 'Básicos',
      route: './template/basics'
    },
    {
      text: 'Dinámicos',
      route: './template/dinamics'
    },
    {
      text: 'Switches',
      route: './template/switches'
    }
  ];

  public reactiveTitles: string = 'Reactive';
  public reactiveMenu: MenuItem[] = [
    {
      text: 'Básicos',
      route: './reactive/basics'
    },
    {
      text: 'Dinámicos',
      route: './reactive/dinamics'
    },
    {
      text: 'Switches',
      route: './reactive/switches'
    }
  ];

}
