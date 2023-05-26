import { Component } from '@angular/core';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { CreateWithdrawlComponent } from '../../components/create-withdrawl/create-withdrawl.component';
import { Subject, takeUntil } from 'rxjs';
import { WithdrawService } from 'src/app/core/services/withdraw.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-withdrawl-list',
  templateUrl: './withdrawl-list.component.html',
  styleUrls: ['./withdrawl-list.component.scss']
})
export class WithdrawlListComponent {

  projects: any[] = [];
  ref!: DynamicDialogRef;
  withdrawsList: any[] = [];
  private _unsubscribe$ = new Subject<boolean>();

  constructor(
    public dialogService: DialogService,
    private _withdrawService: WithdrawService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe((res: any) => {
      this.getAllWithdraws(res);
    });
  }

  getAllWithdraws(queryParams: any): void {
    this._withdrawService.getAllWithdrawals(queryParams).pipe(takeUntil(this._unsubscribe$)).subscribe({
      next: (res: any) => {
        console.log(res);
        this.withdrawsList = res;
      }
    });
  }

  onPageChange(event: any): void {
    this._router.navigate([], {
      queryParams: { pageNumber: event?.first },
      queryParamsHandling: 'merge'
    });
  }

  showAddModal() {
    this.ref = this.dialogService.open(CreateWithdrawlComponent, {
      header: 'Withdraw Amount'
    });
  }

  ngOnDestroy() {
    this._unsubscribe$.next(true);
    this._unsubscribe$.complete();
  }
}
