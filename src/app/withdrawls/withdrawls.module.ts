import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WithdrawlsRoutingModule } from './withdrawls-routing.module';
import { WithdrawlListComponent } from './pages/withdrawl-list/withdrawl-list.component';
import { CreateWithdrawlComponent } from './components/create-withdrawl/create-withdrawl.component';


@NgModule({
  declarations: [
    WithdrawlListComponent,
    CreateWithdrawlComponent
  ],
  imports: [
    CommonModule,
    WithdrawlsRoutingModule
  ]
})
export class WithdrawlsModule { }
