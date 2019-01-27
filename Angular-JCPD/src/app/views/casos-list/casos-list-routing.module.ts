import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CasosListComponent } from './casos-list.component';
const routes: Routes = [
    {
        path: '', component: CasosListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class  CasosRoutingModule {
}
