import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RecentTransactionsComponent } from './components/recent-transactions/recent-transactions.component';
import { CurrentBalanceComponent } from './components/current-balance/current-balance.component';


@NgModule({
  declarations: [
    DashboardComponent,
    RecentTransactionsComponent,
    CurrentBalanceComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
