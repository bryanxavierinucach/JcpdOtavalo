import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Caso } from '../../models/Caso';
import { CasosService } from '../../services/casos.service';

@Component({
  selector: 'app-caso-form',
  templateUrl: './caso-form.component.html',
  styleUrls: ['./caso-form.component.scss'],
  animations: [routerTransition()]
})
export class CasoFormComponent implements OnInit {


  caso: Caso = {
    caso_id : 0,
    proco_id: 0,
    tda_id: 0,
    dav_id: 0,
    tdenun_id: 0,
    caso_numcaso: '',
    caso_motivo: '',
    caso_observaciones: '',
    caso_fechareg: new Date(),
    caso_fechaingreso: new Date()
  };

  // edit: boolean = false;
  proco: any = [];
  tipoDenuncia: any = [];

  constructor(private casosService: CasosService) { }

  ngOnInit() {

    // const params = this.activatedRoute.snapshot.params;
    // if (params.id) {
    //   this.gameService.getGame(params.id)
    //     .subscribe(
    //       res => {
    //         console.log(res);
    //         this.game = res;
    //         this.edit = true;
    //       },
    //       err => console.log(err)
    //     )
    // }

    this.casosService.getProco().subscribe(
      res => {
        this.proco = res;
      },
      err => console.error(err)
    );
  }

  saveNewCaso() {
    console.log(this.caso);
  }

}