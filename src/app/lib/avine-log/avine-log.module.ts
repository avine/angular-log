import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvnStepperComponent } from './avine-log.component';
import { AvnStepperService } from './avine-log.service';

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
export class AvineLogModule { }
