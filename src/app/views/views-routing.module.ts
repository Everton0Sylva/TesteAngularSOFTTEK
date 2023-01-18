import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionComponent } from './admission/admission.component';
import { ViewsComponent } from './views.component';

const routes: Routes = [
  {
    path: '',
    component: ViewsComponent,
   children: [
      {
        path: 'admissao',
        component: AdmissionComponent,
      },
      {
        path: 'admissao/:ni',
        component: AdmissionComponent
      },
      { path: '**',
      pathMatch: 'full', redirectTo: '/404' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
