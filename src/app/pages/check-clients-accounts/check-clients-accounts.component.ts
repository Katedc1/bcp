import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-clients-accounts',
  templateUrl: './check-clients-accounts.component.html',
  styleUrls: ['./check-clients-accounts.component.scss'],
})
export class CheckClientsAccountsComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  listHeader=['position','Documento','Nombres','Paterno','Materno', 'TipoCuenta', 'TipoMoneda', 'Sucursal']

  constructor(private _router: Router){}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  redireccionar(route:string){
    this._router.navigate([route]);
  }
}

export interface PeriodicElement {
  position:number;
  Documento: number;
  Nombres: string;
  Paterno: string;
  Materno: string;
  TipoCuenta: string;
  TipoMoneda: string;
  Sucursal: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1,  Documento: 12345, Nombres: 'Nicole Kate', Paterno: 'Duran', Materno: 'Corrales', TipoCuenta: 'AHORRO', TipoMoneda: 'BOLIVIANOS', Sucursal: 'LA PAZ' },
  { position: 2,  Documento: 12345, Nombres: 'Nicole Kate', Paterno: 'Duran', Materno: 'Corrales', TipoCuenta: 'AHORRO', TipoMoneda: 'BOLIVIANOS', Sucursal: 'LA PAZ' },
  { position: 3,  Documento: 12345, Nombres: 'Nicole Kate', Paterno: 'Duran', Materno: 'Corrales', TipoCuenta: 'AHORRO', TipoMoneda: 'BOLIVIANOS', Sucursal: 'LA PAZ' },
  { position: 4,  Documento: 12345, Nombres: 'Nicole Kate', Paterno: 'Duran', Materno: 'Corrales', TipoCuenta: 'AHORRO', TipoMoneda: 'BOLIVIANOS', Sucursal: 'LA PAZ' },
  { position: 5,  Documento: 12345, Nombres: 'Nicole Kate', Paterno: 'Duran', Materno: 'Corrales', TipoCuenta: 'AHORRO', TipoMoneda: 'BOLIVIANOS', Sucursal: 'LA PAZ' },
  { position: 6,  Documento: 12345, Nombres: 'Nicole Kate', Paterno: 'Duran', Materno: 'Corrales', TipoCuenta: 'AHORRO', TipoMoneda: 'BOLIVIANOS', Sucursal: 'LA PAZ' },
  { position: 7,  Documento: 12345, Nombres: 'Nicole Kate', Paterno: 'Duran', Materno: 'Corrales', TipoCuenta: 'AHORRO', TipoMoneda: 'BOLIVIANOS', Sucursal: 'LA PAZ' },
  { position: 8,  Documento: 12345, Nombres: 'Maria Alejandra', Paterno: 'Duran', Materno: 'Corrales', TipoCuenta: 'AHORRO', TipoMoneda: 'BOLIVIANOS', Sucursal: 'LA PAZ' },
  { position: 9,  Documento: 12345, Nombres: 'Nicole Kate', Paterno: 'Duran', Materno: 'Corrales', TipoCuenta: 'AHORRO', TipoMoneda: 'BOLIVIANOS', Sucursal: 'LA PAZ' },
  { position: 10, Documento: 12345, Nombres: 'Nicole Kate', Paterno: 'Duran', Materno: 'Corrales', TipoCuenta: 'AHORRO', TipoMoneda: 'BOLIVIANOS', Sucursal: 'LA PAZ' },
  { position: 11, Documento: 12345, Nombres: 'Nicole Kate', Paterno: 'Duran', Materno: 'Corrales', TipoCuenta: 'AHORRO', TipoMoneda: 'BOLIVIANOS', Sucursal: 'LA PAZ' },
  { position: 12, Documento: 12345, Nombres: 'Nicole Kate', Paterno: 'Duran', Materno: 'Corrales', TipoCuenta: 'AHORRO', TipoMoneda: 'BOLIVIANOS', Sucursal: 'LA PAZ' },
  { position: 13, Documento: 12345, Nombres: 'Nicole Kate', Paterno: 'Duran', Materno: 'Corrales', TipoCuenta: 'AHORRO', TipoMoneda: 'BOLIVIANOS', Sucursal: 'LA PAZ' },
  { position: 14, Documento: 12345, Nombres: 'Nicole Kate', Paterno: 'Duran', Materno: 'Corrales', TipoCuenta: 'AHORRO', TipoMoneda: 'BOLIVIANOS', Sucursal: 'LA PAZ' },
  { position: 15, Documento: 12345, Nombres: 'Nicole Kate', Paterno: 'Duran', Materno: 'Corrales', TipoCuenta: 'AHORRO', TipoMoneda: 'BOLIVIANOS', Sucursal: 'LA PAZ' },
  { position: 16, Documento: 12345, Nombres: 'Nicole Kate', Paterno: 'Duran', Materno: 'Corrales', TipoCuenta: 'AHORRO', TipoMoneda: 'BOLIVIANOS', Sucursal: 'LA PAZ' },
  { position: 17, Documento: 12345, Nombres: 'Nicole Kate', Paterno: 'Duran', Materno: 'Corrales', TipoCuenta: 'AHORRO', TipoMoneda: 'BOLIVIANOS', Sucursal: 'LA PAZ' },
  { position: 18, Documento: 12345, Nombres: 'Nicole Kate', Paterno: 'Duran', Materno: 'Corrales', TipoCuenta: 'AHORRO', TipoMoneda: 'BOLIVIANOS', Sucursal: 'LA PAZ' },
  { position: 19, Documento: 12345, Nombres: 'Nicole Kate', Paterno: 'Duran', Materno: 'Corrales', TipoCuenta: 'AHORRO', TipoMoneda: 'BOLIVIANOS', Sucursal: 'LA PAZ' },
  { position: 20, Documento: 12345, Nombres: 'Nicole Kate', Paterno: 'Duran', Materno: 'Corrales', TipoCuenta: 'AHORRO', TipoMoneda: 'BOLIVIANOS', Sucursal: 'LA PAZ' },
];


