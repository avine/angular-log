import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvnStepperComponent } from './stepper.component';
import { AvnStepperService } from './stepper.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AvnStepperService
  ],
  declarations: [AvnStepperComponent],
  exports: [AvnStepperComponent]
})
export class AvnStepperModule { }
