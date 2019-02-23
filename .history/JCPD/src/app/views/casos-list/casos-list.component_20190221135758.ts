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
  constructor(private casosService: CasosService, private dialog: MatDialog) {}
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  ngOnInit() {
    this.casosService.getCasos().subscribe(
      res => {
        this.casosli = res;
        this.casosli.paginator = this.paginator;
        this.casosli.filterPredicate = (data, filter) => {
          return this.casosli.caso_numcaso.some(ele => {
            return ele !== 'actions' && data[ele].toLowerCase().indexOf(filter) !== -1;
          });
        };
      },
      err => console.error(err)
    );
  }
  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }
  applyFilter() {
    this.casosli.filter = this.searchKey.trim().toLowerCase();
  }

}

