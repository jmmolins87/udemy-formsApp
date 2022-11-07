import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateRoutingModule } from './template-routing.module';
import { DinamicsComponent } from './dinamics/dinamics.component';
import { SwitchesComponent } from './switches/switches.component';
import { BasicsComponent } from './basics/basics.component';
import { CustomMinDirective } from './directives/custom-min.directive';


@NgModule({
  declarations: [
    DinamicsComponent,
    SwitchesComponent,
    BasicsComponent,
    CustomMinDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    TemplateRoutingModule
  ]
})
export class TemplateModule { }
