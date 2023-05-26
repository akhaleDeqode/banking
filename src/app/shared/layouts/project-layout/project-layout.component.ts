import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { StoreService } from 'src/app/core/services/store.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-project-layout',
  templateUrl: './project-layout.component.html',
  styleUrls: ['./project-layout.component.scss']
})
export class ProjectLayoutComponent {

  userData!: any;
  private _unsubscribe$ = new Subject<boolean>();

  constructor(
    private _userService: UserService,
    private _storeService: StoreService
  ) { }

  ngOnInit(): void {
    this.getUserDetail();
  }

  getUserDetail(): void {
    this._userService.getUserDetail().pipe(takeUntil(this._unsubscribe$)).subscribe({
      next: (res: any) => {
        console.log(res);
        this._storeService.StoreData = { accountId: res?.accountId, firstName: res?.firstName, lastName: res?.lastName, email: res?.email, userId: res?.userId };
      }
    });
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next(true);
    this._unsubscribe$.complete();
  }

}
