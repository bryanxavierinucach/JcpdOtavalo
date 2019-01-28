import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CasoFormComponent } from './caso-form.component';
const routes: Routes = [
    {
        path: '', component: CasoFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class  CasoRoutingModule {
}
