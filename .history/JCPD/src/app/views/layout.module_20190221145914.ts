import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        NgbDropdownModule
        ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent,MaterialModule]
})
export class LayoutModule {}
