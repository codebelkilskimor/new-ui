import { Component, OnInit } from '@angular/core';
import {J} from "@angular/cdk/keycodes";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuItems = [
    {name: 'Dashobard', icon: 'home', active: true, link: 'home'},
    {name: 'Reportes', icon: 'area-chart', active: false, link: 'reports'},
    {name: 'Administracion', icon: 'cog fa-spin', active: false, link: null},
    {name: 'Busqueda', icon: 'search', active: false, link: null},
  ];
  constructor() { }

  ngOnInit(): void {
    const items = localStorage.getItem('menu');
    if (items) {
      this.menuItems = JSON.parse(items);
    }
  }

  logout(): void {
    localStorage.clear();
    window.location.reload();
  }

  clickSetActive(position: number) {
    this.menuItems = [
      {name: 'Dashobard', icon: 'home', active: false, link: 'home'},
      {name: 'Reportes', icon: 'area-chart', active: false, link: 'reports'},
      {name: 'Administracion', icon: 'cog fa-spin', active: false, link: null},
      {name: 'Busqueda', icon: 'search', active: false, link: null},
    ];
    this.menuItems[position].active = true;
    localStorage.setItem('menu', JSON.stringify(this.menuItems));
  }

}
