import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

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
  proco: any = [];
  constructor(private casosService: CasosService) {}

  ngOnInit() {
    this.casosService.getCasos().subscribe(
      res => {
        this.casosli = res;
      },
      err => console.error(err)
    );
    this.casosService.getProco().subscribe(
      res => {
        this.proco = res;
      },
      err => console.error(err)
    );
  }
}

