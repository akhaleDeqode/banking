import { Component, ViewChild } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { CreateDepositComponent } from '../../components/create-deposit/create-deposit.component';

@Component({
  selector: 'app-deposit-list',
  templateUrl: './deposit-list.component.html',
  styleUrls: ['./deposit-list.component.scss']
})
export class DepositListComponent {

  @ViewChild('dt') dt: Table | undefined;

  projects: any[] = [];
  ref!: DynamicDialogRef;

  constructor(
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {
  }

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  showAddModal() {
    this.ref = this.dialogService.open(CreateDepositComponent, {
      header: 'Add Deposit',
      width: '34vw',
    });
  }
  ngOnDestroy() {

  }
}
