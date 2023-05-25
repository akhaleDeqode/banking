import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject, filter, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input('userData') userData!: any;
  breadCrumb!: any;
  optionList = [
    {
      label: 'Logout',
      icon: 'pi pi-sign-out',
      command: () => {
        // this.logout();
      }
    }
  ];
  private _unsubscribe$ = new Subject<boolean>();

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.updateBreadCrumb();
    this._router.events.pipe(filter(event => event instanceof NavigationEnd), takeUntil(this._unsubscribe$)).subscribe((res: any) => {
      this.updateBreadCrumb();
    });
  }

  /**
 * Function to update breadcrumb
 */
  updateBreadCrumb(): void {
    const url = this._router.url;
    switch (url) {
      case '/dashboard/home':
        this.breadCrumb = 'Dashboard';
        break;
      case '/withdrawls/list':
        this.breadCrumb = 'Withdrawls';
        break;
      case '/deposits/list':
        this.breadCrumb = 'Deposits';
        break;
      default:
        this.breadCrumb = '';
        break;
    }
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next(true);
    this._unsubscribe$.complete();
  }

}
