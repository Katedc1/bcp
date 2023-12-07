import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CheckClientAccountService } from 'src/app/services/check-client-account/check-client-account.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-check-clients-accounts',
  templateUrl: './check-clients-accounts.component.html',
  styleUrls: ['./check-clients-accounts.component.scss'],
})
export class CheckClientsAccountsComponent {
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  listHeader = ['position1','position2','position3','position4','position5','position6','position7'];

  constructor(
    private _router: Router,
    private _getRegisters: CheckClientAccountService
  ) {}

  ngOnInit(): void {
    this.getRegisters();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  redireccionar(route: string) {
    this._router.navigate([route]);
  }

  getRegisters() {
    this._getRegisters.getRegistros().subscribe({
      next: (resp) => {
        console.log('resp', resp);
        const arrayDeObjetos: any[] = [];

        resp.forEach((element: any[]) => {
          let objeto: any = {};
          for (let i = 0; i < element.length; i++) {
            objeto[`position${i + 1}`] = element[i];
          }
          arrayDeObjetos.push(objeto);
          this.dataSource.data = arrayDeObjetos;
        });
      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          title: '¡Error!',
          text: "No existen registros",
        });
      },
    });
  }
}