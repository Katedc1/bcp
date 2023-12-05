import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddBankAccountComponent } from '../add-clients-accounts/add-clients-accounts.component';

const routes: Routes = [
  {
    path: '',
    component: AddBankAccountComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class CheckClientsAccountsRoutingModule { }
