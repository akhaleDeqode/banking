import { Component } from '@angular/core';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { CreateDepositComponent } from '../../components/create-deposit/create-deposit.component';
import { Subject, takeUntil } from 'rxjs';
import { DepositService } from 'src/app/core/services/deposit.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deposit-list',
  templateUrl: './deposit-list.component.html',
  styleUrls: ['./deposit-list.component.scss']
})
export class DepositListComponent {

  projects: any[] = [];
  ref!: DynamicDialogRef;
  depositsList!: any[];
  private _unsubscribe$ = new Subject<boolean>();

  constructor(
    public dialogService: DialogService,
    private _depositService: DepositService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe((res: any) => {
      this.getAllDeposits(res);
    });
  }

  getAllDeposits(queryParams: any): void {
    this._depositService.getAllDeposits(queryParams).pipe(takeUntil(this._unsubscribe$)).subscribe({
      next: (res: any) => {
        console.log(res);
        this.depositsList = res;
      }
    })
  }

  onPageChange(event: any): void {
    console.log(event);
    this._router.navigate([], {
      queryParamsHandling: 'merge',
      queryParams: { pageNumber: event?.first }
    });
  }

  showAddModal() {
    this.ref = this.dialogService.open(CreateDepositComponent, {
      header: 'Deposit Amount'
    });
  }
  ngOnDestroy() {
    this._unsubscribe$.next(true);
    this._unsubscribe$.complete();
  }
}
