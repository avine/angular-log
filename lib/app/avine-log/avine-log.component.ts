import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

import * as plugin from '../plugin/plugin';
import { LogModel } from './avine-log.model';

@Component({
  selector: 'avn-avine-log',
  templateUrl: './avine-log.component.html',
  styleUrls: ['./avine-log.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvineLogComponent implements OnInit, OnChanges, OnDestroy {
  @Input() logs: LogModel[] = [];

  @ViewChild('wrapper') wrapper: ElementRef;

  constructor() { }

  ngOnInit() {
    plugin.init(this.wrapper.nativeElement);
  }

  ngOnChanges() {
    plugin.cleanLog();
    this.logs.forEach(log => plugin.log(log.title, log.message));
  }

  ngOnDestroy() {

  }
}
