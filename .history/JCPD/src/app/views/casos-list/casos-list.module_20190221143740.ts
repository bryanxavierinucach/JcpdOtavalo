import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasosRoutingModule } from './casos-list-routing.module';
import { CasosListComponent } from './casos-list.component';
import { PageHeaderModule } from '../../shared';
import { MaterialModule } from '../../material/material.module';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
    imports: [CommonModule, CasosRoutingModule, PageHeaderModule, MaterialModule, MatPaginatorModule],
    declarations: [CasosListComponent]
})
export class CasosModule {}
