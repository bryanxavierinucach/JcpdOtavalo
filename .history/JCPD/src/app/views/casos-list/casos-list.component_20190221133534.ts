import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { MatDialog, MatDialogConfig } from '@angular/material';


// importar el servicio en el cual creamos las Apis
import { CasosService } from '../../services/casos.service';


@Component({
  selector: 'app-casos-list',
  templateUrl: './casos-list.component.html',
  styleUrls: ['./casos-list.component.scss'],
  animations: [routerTransition()]
})
export class CasosListComponent implements OnInit {

  casosli: any = [ ];
  constructor(private casosService: CasosService) {}

  ngOnInit() {
    this.casosService.getCasos().subscribe(
      res => {
        this.casosli = res;
      },
      err => console.error(err)
    );
  }
}

