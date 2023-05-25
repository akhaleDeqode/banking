import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input('userData') userData!: any;
  optionList = [
    {
      label: 'Logout',
      icon: 'pi pi-sign-out',
      command: () => {
        // this.logout();
      }
    }
  ];


}
