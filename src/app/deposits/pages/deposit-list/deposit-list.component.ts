import { Component } from '@angular/core';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { CreateDepositComponent } from '../../components/create-deposit/create-deposit.component';
import { Subject, takeUntil } from 'rxjs';
import { DepositService } from 'src/app/core/services/deposit.service';

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
    private _depositService: DepositService
  ) { }

  ngOnInit(): void {
    this.getAllDeposits();
  }

  getAllDeposits(): void {
    this._depositService.getAllDeposits().pipe(takeUntil(this._unsubscribe$)).subscribe({
      next: (res: any) => {
        console.log(res);
        this.depositsList = res;
      }
    })
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
