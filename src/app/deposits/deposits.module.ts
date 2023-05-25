import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepositsRoutingModule } from './deposits-routing.module';
import { DepositListComponent } from './pages/deposit-list/deposit-list.component';
import { CreateDepositComponent } from './components/create-deposit/create-deposit.component';


@NgModule({
  declarations: [
    DepositListComponent,
    CreateDepositComponent
  ],
  imports: [
    CommonModule,
    DepositsRoutingModule
  ]
})
export class DepositsModule { }
