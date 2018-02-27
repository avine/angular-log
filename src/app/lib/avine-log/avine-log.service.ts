import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { LogModel } from './avine-log.model';

@Injectable()
export class AvnStepperService {
  log$: Subject<LogModel> = new Subject();

  log(title: string, message: string) {
    this.log$.next({ title, message });
  }
}
