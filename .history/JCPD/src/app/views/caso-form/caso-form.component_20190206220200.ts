import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-caso-form',
  templateUrl: './caso-form.component.html',
  styleUrls: ['./caso-form.component.scss'],
  animations: [routerTransition()]
})
export class CasoFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
