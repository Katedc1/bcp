import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckClientsAccountsRoutingModule } from './check-clients-accounts-routing.module';
import { CheckClientsAccountsComponent } from './check-clients-accounts.component';
import { HeaderModule } from 'src/app/shared/header/header/header.module';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';




@NgModule({
  declarations: [
    CheckClientsAccountsComponent
  ],
  imports: [
    CommonModule,
     CheckClientsAccountsRoutingModule,
     HeaderModule,
     MatTableModule,
     MatPaginatorModule,
     FooterModule,
     MatButtonModule,
     MatIconModule
  ]
})
export class CheckClientsAccountsModule { }
