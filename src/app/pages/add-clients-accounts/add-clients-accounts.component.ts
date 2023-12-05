import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-bank-account',
  templateUrl: './add-clients-accounts.component.html',
  styleUrls: ['./add-clients-accounts.component.scss']
})

export class AddBankAccountComponent {
  formClient: FormGroup;
  formCuenta: FormGroup;
  today = new Date();
  maxDate:string = "";

  listStatus=[
    {
      id: 1,
      description:'SOLTERO'
    },
    {
      id: 2,
      description:'CASAD0'
    },
    {
      id: 3,
      description:'CONVIVIENTE'
    },
  ];

  listNationality=[
    {
      id: 1,
      description:'ARGENTINA'
    },
    {
      id: 2,
      description:'BOLIVIA'
    },
    {
      id: 3,
      description:'BRASIL'
    },
    {
      id: 4,
      description:'CHILE'
    },
    {
      id: 5,
      description:'COLOMBIA'
    },
    {
      id: 6,
      description:'ECUADOR'
    },
    {
      id: 7,
      description:'PERU'
    },
    {
      id: 8,
      description:'URUGUAY'
    },
  ];

  listTypeAccount=[
    {
      id: 1,
      description:'AHORRO'
    },
    {
      id: 2,
      description:'CORRIENTE'
    }
  ];

  listTypeCurrency=[
    {
      id: 1,
      description:'BOLIVIANOS'
    },
    {
      id: 2,
      description:'DOLARES'
    }
  ];

  listBranch=[
    {
      id: 1,
      description:'BENI'
    },
    {
      id: 2,
      description:'CHUQUISACA'
    },
    {
      id: 3,
      description:'COCHABAMBA'
    },
    {
      id: 4,
      description:'LA PAZ'
    },
    {
      id: 5,
      description:'ORURO'
    },
    {
      id: 6,
      description:'PANDO'
    },
    {
      id: 7,
      description:'POTOSI'
    },
    {
      id: 8,
      description:'SANTA CRUZ'
    },
    {
      id: 9,
      description:'TARIJA'
    },
  ];

  constructor(private fb: FormBuilder) {
  this.validarDate();

    this.formClient = this.fb.group({
      documento: ['', [Validators.required,Validators.pattern(/^[0-9]+$/)]],
      nombres: ['', [Validators.required,Validators.pattern(/^[a-zA-Z\s]+$/)]],
      paterno: ['', [Validators.required,Validators.pattern(/^[a-zA-Z\s]+$/)]],
      materno: ['', [Validators.required,Validators.pattern(/^[a-zA-Z\s]+$/)]],
      fechanacimiento: ['', [Validators.required]],
      domicilio: ['', [Validators.required]],

      estadocivil: ['', [Validators.required]],
      nacionalidad: ['', [Validators.required]],
    });

    this.formCuenta = this.fb.group({
      documento: ['', Validators.required],
      nombrecuenta: ['', [Validators.required]],
      tipocuenta: ['', [Validators.required]],
      tipodemoneda: ['', [Validators.required]],
      sucursal: ['', [Validators.required]],
    });
   }

  ngOnInit(): void {
  }

  registrarCliente() {
    if (this.formClient.valid) {
      console.log('valido')
      console.log('Form submitted:', this.formClient.value);
    }else{
      console.log('no valido')
    }
  }

  registrarCuenta(){
    if (this.formCuenta.valid) {
      console.log('valido')
      console.log('Form submitted:', this.formCuenta.value);
    }else{
      console.log('no valido')
    }
  }
  
  validarDate(){
    this.today.setFullYear(this.today.getFullYear() - 18);
    let day = this.today.getDate();
    let month = this.today.getMonth();
    let year = this.today.getFullYear();
    this.maxDate = year+'-'+month+'-'+'0'+day;
  }

}