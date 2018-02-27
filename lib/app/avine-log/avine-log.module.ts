import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvineLogComponent } from './avine-log.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AvineLogComponent],
  exports: [AvineLogComponent]
})
export class AvineLogModule { }
