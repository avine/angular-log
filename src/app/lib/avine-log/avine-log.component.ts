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

import Stepper from '../plugin/plugin';
import { LogModel, StepModel } from './avine-log.model';

@Component({
  selector: 'avn-avine-log',
  templateUrl: './avine-log.component.html',
  styleUrls: ['./avine-log.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvineLogComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  @ViewChild('wrapper') wrapper: ElementRef;

  @Input() log$: Observable<LogModel>;
  @Input() steps: StepModel[] = [];
  @Output() onlog = new EventEmitter<LogModel>();

  stepper: Stepper;
  subscription: Subscription;

  constructor() { }

  ngOnInit() {
    this.stepper = new Stepper(this.wrapper.nativeElement);
    const subscription = this.log$.subscribe(log => this.stepper.log(log.title, log.message));
  }

  ngAfterViewInit() {
    this.stepper.$logs = this.wrapper.nativeElement.querySelector('.helper-logs');
    this.stepper.$logs.addEventListener('avnlog', (event: CustomEvent) => this.onlog.emit(event.detail));
  }

  ngOnChanges() {
    this.steps.forEach(step => this.stepper.step(step.title, step.callback));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
