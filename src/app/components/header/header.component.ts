import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  path = '';
  pathArr: string[] = [];
  currentRoute = '';

  constructor(){
    this.pathArr = ["Cadastro","Admissão de Cooperado","Nova Admissão de Cooperado"]
    this.currentRoute = this.pathArr[this.pathArr.length-1];
  }
}
