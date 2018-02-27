import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AvineLogModule } from '../../lib/app/avine-log/avine-log.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AvineLogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
