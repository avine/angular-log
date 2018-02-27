import { Component } from '@angular/core';

import { LogModel } from '../../lib/app/avine-log/avine-log.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  logs: LogModel[] = [
    { title: 'Hello', message: 'World!' },
    { title: 'Hello', message: 'World!' },
    { title: 'Hello', message: 'World!' }
  ];
}
