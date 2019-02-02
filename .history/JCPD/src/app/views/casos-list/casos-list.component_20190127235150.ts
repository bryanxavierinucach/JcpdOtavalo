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
  public casosli: any = [ ];
  public page: Number = 1;
  public totalPages: Number;
  public numShops: number;
  private numResults = 10;

  constructor(private casosService: CasosService) {}

  ngOnInit() {
    this.casosService.getCasos().subscribe(
      res => {
        this.casosli = res;
        console.log(res);

      },
      err => console.error(err)
    );
  }
  goToPage(page: number) {
    this.page = page;
    this.getShopsByPage(page);
  }
  getShopsByPage(page: Number) {
    this.casosService.getCasos().subscribe(
      res => {
        this.casosli = res;
        console.log(res);
  this.totalPages = Math.round(this.numShops / this.numResults);
    });
  }
}

