import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasosRoutingModule } from './casos-list-routing.module';
import { CasosListComponent } from './casos-list.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, CasosRoutingModule, PageHeaderModule],
    declarations: [CasosListComponent]
})
export class CasosModule {}
