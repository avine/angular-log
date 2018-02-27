import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { LogModel, StepModel } from '../../lib/app/avine-log/avine-log.model';
import * as plugin from '../../lib/app/plugin/plugin';

@Component({
  selector: 'app-root',
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
