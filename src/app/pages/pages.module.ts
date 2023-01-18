import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { P404Component } from './p404/p404.component';


@NgModule({
  declarations: [
    P404Component
  ],
  imports: [
    CommonModule,
  ],  
  exports: [
    P404Component
  ],
})
export class PagesModule { }
