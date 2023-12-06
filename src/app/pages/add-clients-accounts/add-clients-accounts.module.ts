import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBankAccountComponent } from './add-clients-accounts.component';
import { AddBankAccountRoutingModule } from './add-clients-accounts-routing.module';
import { HeaderModule } from 'src/app/shared/header/header/header.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AddBankAccountComponent
  ],
  imports: [
    CommonModule,
    AddBankAccountRoutingModule,
    HeaderModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatStepperModule,
    FooterModule,
    MatIconModule
  ]
})
export class AddBankAccountModule { }
