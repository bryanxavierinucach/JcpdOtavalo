import { Component, OnInit, HostBinding } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Caso } from '../../models/Caso';

@Component({
  selector: 'app-caso-form',
  templateUrl: './caso-form.component.html',
  styleUrls: ['./caso-form.component.scss'],
  animations: [routerTransition()]
})
export class CasoFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';

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

  constructor() { }

  ngOnInit() {
  }

}
