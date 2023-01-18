import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { isNullOrUndefined } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-wizardsteps',
  templateUrl: './wizardsteps.component.html',
  styleUrls: ['./wizardsteps.component.scss']
})
export class WizardStepsComponent {

  public steps = []

  @Input()
  set setSteps(iSteps) {
    this.steps = [...iSteps];
  }
  @Input()
  public currentStep: number;


}
