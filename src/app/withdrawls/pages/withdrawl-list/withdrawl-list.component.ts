import { Component } from '@angular/core';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { CreateWithdrawlComponent } from '../../components/create-withdrawl/create-withdrawl.component';
import { Subject } from 'rxjs';

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
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {
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
