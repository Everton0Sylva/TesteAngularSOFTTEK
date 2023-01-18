import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Cpf } from 'src/app/model/CPF';
import { ApiRequestService } from 'src/app/services/apirequest.service';
import Swal from 'sweetalert2';
declare var bootstrap: any;


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  @Output()
  public resultCPF = new EventEmitter<Cpf>();

  public cpf: string;

  constructor(private apiRequestService: ApiRequestService, private ngxService: NgxUiLoaderService) { }


  public toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: false,
  })


  ngOnInit() {
    this.cpf = "";
  }

  onConsultarCpf() {
    if (this.cpf.length > 0 && this.cpf.length < 11) {
      this.toast.fire({
        text: 'CPF Inválido!',
        icon: 'error',
      })
    } else {
      let that = this;
      this.ngxService.start();
      this.apiRequestService.GET(this.cpf)
        .then((data: any) => {
          that.resultCPF.emit(new Cpf(data));
        }).catch(error => {
          that.ngxService.stop();
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: error.error.toString(),
            cancelButtonText: 'OK',
            showCancelButton: true,
            showConfirmButton: false,
            buttonsStyling: false,
            customClass: {
              cancelButton: 'btn btn-outline-secondary'
            },
          }).then((result) => {
            setTimeout(() => {
              document.getElementById("ftgInputCpf").focus();
            }, 200);
          })
        })
    }
  }

}
