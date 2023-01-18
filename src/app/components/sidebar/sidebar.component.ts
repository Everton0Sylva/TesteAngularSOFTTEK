import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public isToggled: boolean = true;

  public menuItens = []

  constructor() { }

  ngOnInit() {
    this.menuItens.push(
      {icon: "fa-magnifying-glass", label: "Pesquisar", route: "/admissao"}, 
      {icon: "fa-star", label: "Favoritos", route: "/"},
      {icon: "fa-comment-dots", label: "Mensagens", route: "/"}, 
      {icon: "fa-sliders", label: "Ajustes", route: "/"},
      {icon: "fa-landmark", label: "Bancos", route: "/"})
  }

  onToggle() {
    this.isToggled = !this.isToggled;
  }

}
