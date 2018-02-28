import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { LogModel, StepModel } from './lib/component/stepper.model';
import { AvnStepperService } from './lib/component/stepper.service';

@Component({
  selector: 'avn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  log$: Subject<LogModel> = new Subject();
  steps: StepModel[] = [];
  counter = 0;

  constructor(private stepperService: AvnStepperService) { }

  addLog() {
    this.log$.next({ title: 'ok', message: 'yes!' });
  }

  addStep() {
    this.counter++;
    this.steps = [
      {
        title: `Adding log ${this.counter}`,
        callback: () => this.stepperService.log(`title ${this.counter}`, `desc ${this.counter}`)
      }
    ];
  }

  listenToLogs(e) {
    console.log('listenToLogs', e);
  }
}
