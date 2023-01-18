import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';

import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { WizardStepsComponent } from './wizardsteps/wizardsteps.component';


@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    WizardStepsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    WizardStepsComponent
  ],
})
export class ComponentsModule { }
