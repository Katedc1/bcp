import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddBankAccountComponent } from './pages/add-clients-accounts/add-clients-accounts.component';
import { CheckClientsAccountsComponent } from './pages/check-clients-accounts/check-clients-accounts.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    loadChildren:() => import('./pages/home/home.module').then((m) => m.HomeModule)
  },
  {
    path:'add-bank-account',
    component:AddBankAccountComponent,
    loadChildren:() => import('./pages/add-clients-accounts/add-clients-accounts.module').then((m) => m.AddBankAccountModule)
  },
  
  {
    path:'check-clients-accounts',
    component:CheckClientsAccountsComponent,
    loadChildren:() => import('./pages/check-clients-accounts/check-clients-accounts.module').then((m) => m.CheckClientsAccountsModule)
  },
 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
