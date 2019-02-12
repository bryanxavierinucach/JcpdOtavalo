import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CasoRoutingModule } from './caso-form.routing.module';
import { CasoFormComponent } from './caso-form.component';
import { PageHeaderModule } from '../../shared';
import { FormsModule } from '@angular/forms';



@NgModule({
    imports: [NgbModule, CommonModule, CasoRoutingModule, PageHeaderModule, FormsModule],
    declarations: [CasoFormComponent]
})
export class CasoModule {}
