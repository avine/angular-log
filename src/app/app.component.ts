import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { LogModel, StepModel } from './lib/avine-log/avine-log.model';
import * as plugin from './lib/plugin/plugin';

@Component({
  selector: 'avn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  log$: Subject<LogModel> = new Subject();

  counter = 0;

  steps: StepModel[] = [];

  addLog() {
    this.log$.next({ title: 'ok', message: 'yes!' });
  }

  addStep() {
    this.counter++;
    this.steps = [
      {
        title: `Adding log ${this.counter}`,
        callback: () => plugin.log(`title ${this.counter}`, `desc ${this.counter}`)
      }
    ];
  }

  listenToLogs(e) {
    console.log('listenToLogs', e);
  }
}
