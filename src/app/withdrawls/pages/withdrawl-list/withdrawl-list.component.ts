import { Component } from '@angular/core';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { CreateWithdrawlComponent } from '../../components/create-withdrawl/create-withdrawl.component';
import { Subject, takeUntil } from 'rxjs';
import { WithdrawService } from 'src/app/core/services/withdraw.service';

@Component({
  selector: 'app-withdrawl-list',
  templateUrl: './withdrawl-list.component.html',
  styleUrls: ['./withdrawl-list.component.scss']
})
export class WithdrawlListComponent {

  projects: any[] = [];
  ref!: DynamicDialogRef;
  private _unsubscribe$ = new Subject<boolean>();

  constructor(
    public dialogService: DialogService,
    private _withdrawService: WithdrawService
  ) { }

  ngOnInit(): void {
    this.getAllWithdraws();
  }

  getAllWithdraws(): void {
    this._withdrawService.getAllWithdrawals().pipe(takeUntil(this._unsubscribe$)).subscribe({
      next: (res: any) => {
        console.log(res);
        
      }
    })
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
