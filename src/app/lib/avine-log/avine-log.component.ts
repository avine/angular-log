import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import * as plugin from '../plugin/plugin';
import { LogModel, StepModel } from './avine-log.model';

@Component({
  selector: 'avn-avine-log',
  templateUrl: './avine-log.component.html',
  styleUrls: ['./avine-log.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvineLogComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  @Input() log$: Observable<LogModel>;
  @Input() steps: StepModel[] = [];

  @Output() onlog = new EventEmitter<LogModel>();

  @ViewChild('wrapper') wrapper: ElementRef;

  subscription: Subscription;

  logsDom: HTMLElement;

  constructor() { }

  ngOnInit() {
    plugin.init(this.wrapper.nativeElement);

    const subscription = this.log$.subscribe(log => plugin.log(log.title, log.message));
  }

  ngAfterViewInit() {
    this.logsDom = this.wrapper.nativeElement.querySelector('.helper-logs');
    this.logsDom.addEventListener('avnlog', (event: CustomEvent) => this.onlog.emit(event.detail));
  }

  ngOnChanges() {
    this.steps.forEach(step => plugin.step(step.title, step.callback));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
