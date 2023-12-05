import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckClientsAccountsRoutingModule } from './check-clients-accounts-routing.module';
import { CheckClientsAccountsComponent } from './check-clients-accounts.component';





@NgModule({
  declarations: [
    CheckClientsAccountsComponent
  ],
  imports: [
    CommonModule,
     CheckClientsAccountsRoutingModule
  ]
})
export class CheckClientsAccountsModule { }
