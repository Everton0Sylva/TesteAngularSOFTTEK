import { Component, EventEmitter, Input, Output } from '@angular/core';
import { isNullOrUndefined } from '@swimlane/ngx-datatable';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Cooperated } from 'src/app/model/cooperated';
import { Cpf } from 'src/app/model/CPF';
import { ApiRequestService } from 'src/app/services/apirequest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent {

  @Input()
  set resultCPF(cpf: Cpf) {
    if (!isNullOrUndefined(cpf)) {
      if (!isNullOrUndefined(cpf.ni)) {
        this.currentCPF = cpf;
        this.currentAccount = {
          coop: this.onGenerateRandomAccount(),
          personal: this.onGenerateRandomAccount()
        }
        var cooper = new Cooperated(this.currentCPF);
        cooper.accounts.personal = this.currentAccount.personal;
        cooper.accounts.cooperative = this.currentAccount.coop;
        this.ngxService.stop();
        this.validatedCooperated.emit(cooper)
      }
    }
  }

  public currentCPF: Cpf;
  public currentAccount: any;

  @Output()
  public validatedCooperated = new EventEmitter<Cooperated>();

  constructor(private ngxService: NgxUiLoaderService) { }

  onGenerateRandomAccount() {
    var numb = (Math.floor(Math.random() * (999999 - 111111 + 1)) + 111111);
    var digit = Math.floor(Math.random() * 10);
    return String(numb + '-' + digit);
  }

}
