import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AvnStepperModule } from './lib/component/stepper.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AvnStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
