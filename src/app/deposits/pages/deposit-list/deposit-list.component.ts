import { Component } from '@angular/core';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { CreateDepositComponent } from '../../components/create-deposit/create-deposit.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-deposit-list',
  templateUrl: './deposit-list.component.html',
  styleUrls: ['./deposit-list.component.scss']
})
export class DepositListComponent {

  projects: any[] = [];
  ref!: DynamicDialogRef;
  private _unsubscribe$ = new Subject<boolean>();

  constructor(
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {
  }

  showAddModal() {
    this.ref = this.dialogService.open(CreateDepositComponent, {
      header: 'Deposit Amount',
      width: '34vw',
    });
  }
  ngOnDestroy() {
    this._unsubscribe$.next(true);
    this._unsubscribe$.complete();
  }
}
