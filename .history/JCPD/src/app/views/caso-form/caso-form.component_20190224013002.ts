import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Caso } from '../../models/Caso';
import { CasosService } from '../../services/casos.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

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
  tdenun: any = [];
  tda: any = [];
  ttda: any = [];
  angForm: FormGroup;
  constructor(private casosService: CasosService, private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      proco_id: ['', Validators.required ],
      tda_id: ['', Validators.required ],
      dav_id: ['', Validators.required ],
      tdenun_id: ['', Validators.required ],
      caso_numcaso: ['', Validators.required ],
      caso_motivo: ['', Validators.required ],
      caso_observaciones: ['', Validators.required ],
      dacaso_fecharegv_id: ['', Validators.required ],
      caso_fechaingreso: ['', Validators.required ],

    });
  }
  ngOnInit() {

    this.casosService.getProco().subscribe(
      res => {
        this.proco = res;
      },
      err => console.error(err)
    );
    this.casosService.getTipoDenuncia().subscribe(
      res => {
        this.tdenun = res;
      } ,
      err => console.log(err)
    );
    this.casosService.getTiposDerechosAmenazas().subscribe(
      res => {
        this.ttda = res;
      } ,
      err => console.log(err)
    );
    this.casosService.getDerechoAmeViolentado().subscribe(
      res => {
        this.tda = res;
      } ,
      err => console.log(err)
    );

  }

  saveNewCaso() {
    delete this.caso.caso_id;
    this.casosService.saveCaso(this.caso)
    .subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    );
  }

}
