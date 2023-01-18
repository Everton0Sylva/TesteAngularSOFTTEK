import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiRequestService } from './services/apirequest.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot({
      maxTime: 300000,
      blur: 8,
      fgsType: "ball-scale-multiple",
      fgsSize: 60,
      hasProgressBar: false,
      gap: 6,
      text: "Aguarde",
      textPosition: "center-center",
    }),
    NgxDatatableModule.forRoot({
      messages: {
        emptyMessage: 'Sem Dados para listar!',
        totalMessage: 'Total',
        selectedMessage: ""
      }
    }),
    NgxMaskModule.forRoot(),
    ComponentsModule,
    PagesModule
  ],
  providers: [
    ApiRequestService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
