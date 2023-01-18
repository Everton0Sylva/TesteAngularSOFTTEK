import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Cooperated } from 'src/app/model/cooperated';
import { Cpf } from 'src/app/model/CPF';
import { ApiRequestService } from 'src/app/services/apirequest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.scss']
})
export class AdmissionComponent implements OnInit {

  public steps = []

  public currentStep: number;
  public currentCPF: Cpf;
  public currentCooperated: Cooperated | undefined;

  constructor(private apiRequestService: ApiRequestService, private ngxService: NgxUiLoaderService) { }

  public toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
  })

  ngOnInit() {
    this.steps.push(
      { name: "search", label: "Procura" },
      { name: "validation", label: "Validação" },
      { name: "record", label: "Gravação" }
    );
    this.currentStep = 0;
  }

  onReceivedCPF(cpf: Cpf) {
    this.currentCPF = cpf;
    this.currentStep = this.steps.findIndex(f => f.name.includes("validation"));
  }

  onAddCooperated() {
    let that = this;/*
    if (this.currentCPF.situacao.codigo != 0) {
      Swal.fire({
        icon: 'error',
        title: 'Somente pode cadastrar Cooperado com a Situação:',
        text: 'Codigo: "0" - DESCRICAO: REGULAR',
        cancelButtonText: 'OK',
        showCancelButton: true,
        showConfirmButton: false,
        buttonsStyling: false,
        customClass: {
          cancelButton: 'btn btn-outline-secondary'
        },
      }).then((result) => {
        that.currentCooperated = undefined;
        that.currentStep = 2;
      })
    } else {*/
      Swal.fire({
        icon: 'question',
        title: 'Confirmar Inclusão?',
        text: 'Deseja realmente Cadastrar o Cooperado ' + that.currentCPF.nome + "?",
        showCancelButton: true,
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não',
        reverseButtons: true,
        customClass: {
          confirmButton: 'btn btn-success ms-3',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      }).then((result) => {
        if (result.isConfirmed) {
          that.ngxService.start();
          that.apiRequestService.POST(that.currentCooperated).then((data: any) => {
            that.ngxService.stop();
            that.currentStep = 2;
          }).catch(error => {
            that.ngxService.stop();
            if (error.error instanceof ProgressEvent) {
              that.toast.fire({
                text: 'Erro no acesso!',
                icon: 'error',
              })
            } else if (error.error.includes("duplicate id")) {
              that.toast.fire({
                text: 'CPF ' + that.currentCooperated.ni + ' já cadastrado como Cooperado!',
                icon: 'error',
              })
            } else {
              that.toast.fire({
                text: 'Erro no cadastro do Cooperado!',
                icon: 'error',
              })
            }
            that.currentCooperated = undefined;
            that.currentStep = 2;
          })

        }
      })
   // }
  }
}
