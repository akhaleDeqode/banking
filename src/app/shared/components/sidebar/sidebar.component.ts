import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  sidebarMenu: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'pi pi-th-large',
      routerLink: '/dashboard',
      expanded: this.isRouteActive('/dashboard')
    },
    {
      label: 'Deposits',
      icon: 'pi pi-bolt',
      routerLink: '/actions/list',
      expanded: this.isRouteActive('/actions'),
    },
    {
      label: 'Withdrawls',
      icon: 'pi pi-minus-circle',
      routerLink: '/risks',
      expanded: this.isRouteActive('/risks'),
    }
  ];

  constructor(private _router: Router) { }

  isRouteActive(url: string): boolean {
    return this._router.url.includes(url);
  }


}
