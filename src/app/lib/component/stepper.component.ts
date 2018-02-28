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
  Renderer2
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { merge } from 'rxjs/observable/merge';

import Stepper from '../plugin/stepper';
import { LogModel, StepModel } from './stepper.model';
import { AvnStepperService } from './stepper.service';

@Component({
  selector: 'avn-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvnStepperComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  @ViewChild('wrapper') wrapper: ElementRef;

  @Input() log$: Observable<LogModel>;
  @Input() steps: StepModel[] = [];
  @Output() onlog = new EventEmitter<LogModel>();

  stepper: Stepper;
  subscription: Subscription;

  constructor(
    private stepperService: AvnStepperService,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.stepper = new Stepper(this.wrapper.nativeElement);
    this.subscription =
      merge(this.log$, this.stepperService.log$)
        .subscribe(log => this.stepper.log(log.title, log.message));
  }

  ngAfterViewInit() {
    /*
      // VanillaJS version
      this.stepper.$logs.addEventListener(
        'avnlog',
        (event: CustomEvent) => this.onlog.emit(event.detail)
      );
    */

    // Angularized version
    this.renderer.listen(
      this.stepper.$logs,
      'avnlog',
      (event: CustomEvent) => this.onlog.emit(event.detail)
    );
  }

  ngOnChanges() {
    this.steps.forEach(step => this.stepper.step(step.title, step.callback));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
