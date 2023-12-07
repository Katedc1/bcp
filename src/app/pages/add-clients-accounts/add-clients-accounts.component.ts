import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStep, MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { CreateClientService } from 'src/app/services/createAccount/create-client.service';
import Swal from 'sweetalert2';
import { CreateAccountService } from '../../services/createClient/create-account.service';
@Component({
  selector: 'app-add-bank-account',
  templateUrl: './add-clients-accounts.component.html',
  styleUrls: ['./add-clients-accounts.component.scss'],
})
export class AddBankAccountComponent {
  formClient: FormGroup;
  formCuenta: FormGroup;
  today = new Date();
  maxDate: string = '';

  listStatus = [
    {
      id: 1,
      description: 'SOLTERO',
    },
    {
      id: 2,
      description: 'CASAD0',
    },
    {
      id: 3,
      description: 'CONVIVIENTE',
    },
  ];

  listNationality = [
    {
      id: 1,
      description: 'ARGENTINA',
    },
    {
      id: 2,
      description: 'BOLIVIA',
    },
    {
      id: 3,
      description: 'BRASIL',
    },
    {
      id: 4,
      description: 'CHILE',
    },
    {
      id: 5,
      description: 'COLOMBIA',
    },
    {
      id: 6,
      description: 'ECUADOR',
    },
    {
      id: 7,
      description: 'PERU',
    },
    {
      id: 8,
      description: 'URUGUAY',
    },
  ];

  listTypeAccount = [
    {
      id: 1,
      description: 'AHORRO',
    },
    {
      id: 2,
      description: 'CORRIENTE',
    },
  ];

  listTypeCurrency = [
    {
      id: 1,
      description: 'BOLIVIANOS',
    },
    {
      id: 2,
      description: 'DOLARES',
    },
  ];

  listBranch = [
    {
      id: 1,
      description: 'BENI',
    },
    {
      id: 2,
      description: 'CHUQUISACA',
    },
    {
      id: 3,
      description: 'COCHABAMBA',
    },
    {
      id: 4,
      description: 'LA PAZ',
    },
    {
      id: 5,
      description: 'ORURO',
    },
    {
      id: 6,
      description: 'PANDO',
    },
    {
      id: 7,
      description: 'POTOSI',
    },
    {
      id: 8,
      description: 'SANTA CRUZ',
    },
    {
      id: 9,
      description: 'TARIJA',
    },
  ];

  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private _createClientService: CreateClientService,
    private _createCuentaService: CreateAccountService
  ) {
    this.validarDate();

    this.formClient = this.fb.group({
      documento_vc: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      nombres_vc: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)],
      ],
      paterno_vc: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)],
      ],
      materno_vc: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)],
      ],
      fecha_nacimiento_vc: ['', [Validators.required]],
      domicilio_vc: ['', [Validators.required]],
      estado_civil_vc: ['', [Validators.required]],
      nacionalidad_vc: ['', [Validators.required]],
    });

    this.formCuenta = this.fb.group({
      cliente_documento_vc: ['', Validators.required],
      nombre_cuenta_vc: ['', [Validators.required]],
      tipo_cuenta_vc: ['', [Validators.required]],
      tipo_moneda_vc: ['', [Validators.required]],
      sucursal_vc: ['', [Validators.required]],
    });

    this.formCuenta.get('documento')?.disable();
  }

  ngOnInit(): void {}

  registrarCliente(stepper: MatStepper) {
    if (this.formClient.valid) {
      console.log('valido');
      console.log('Form submitted:', this.formClient.value);
      this._createClientService.createClient(this.formClient.value).subscribe({
        next: (resp) => {
          console.log('resp', resp);
          Swal.fire({
            icon: 'success',
            title: '¡OK!',
            text: resp.mensaje,
            showConfirmButton: false,
            timer: 1500,
          });
          stepper.next();
        },
        error: (error) => {
          console.log('Error', error);

          Swal.fire({
            icon: 'error',
            title: '¡Error!',
            text: error.message,
          });
        },
      });
    } else {
      console.log('no valido');
      this.formClient.markAllAsTouched();
    }
  }

  registrarCuenta() {
    if (this.formCuenta.valid) {
      console.log('valido');
      console.log('Form submitted:', this.formCuenta.value);
      this._createCuentaService.createCuenta(this.formCuenta.value).subscribe({
        next: (resp) => {
          console.log('resp', resp);
          Swal.fire({
            icon: 'success',
            title: '¡OK!',
            text: resp.mensaje,
            showConfirmButton: false,
            timer: 1500,
          });

          this.formCuenta.clearValidators();
          this.formCuenta.updateValueAndValidity();
          this.formCuenta.reset();
        },
        error: (error) => {
          console.log('Error', error);

          Swal.fire({
            icon: 'error',
            title: '¡Error!',
            text: error.error.mensaje,
          });
        },
      });
    } else {
      console.log('no valido');
      this.formCuenta.markAllAsTouched();
    }
  }

  validarDate() {
    this.today.setFullYear(this.today.getFullYear() - 18);
    let day = this.today.getDate();
    let month = this.today.getMonth();
    let year = this.today.getFullYear();
    this.maxDate = year + '-' + month + '-' + '0' + day;
  }

  redireccionar(route: string) {
    this._router.navigate([route]);
  }
}
