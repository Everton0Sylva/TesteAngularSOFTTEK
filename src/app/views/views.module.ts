import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsRoutingModule } from './views-routing.module';
import { ViewsComponent } from './views.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { ComponentsModule } from '../components/components.module';
import { AdmissionComponent } from './admission/admission.component';
import { SearchComponent } from './admission/search/search.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { ValidationComponent } from './admission/validation/validation.component';
@NgModule({
  declarations: [
    ViewsComponent,
    SearchComponent,
    AdmissionComponent,
    ValidationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    ViewsRoutingModule,
    NgxMaskModule,
    ComponentsModule,
    NgxUiLoaderModule
  ]
})
export class ViewsModule { }
