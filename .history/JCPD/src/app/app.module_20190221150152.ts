import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import {MatPaginatorModule} from '@angular/material/paginator';

import {NoopAnimationsModule} from '@angular/platform-browser/animations';

  // SERVICIOS DE LA APLICACION JCPD

import { CasosService} from './services/casos.service';
import { AuthService } from './services/auth.service';

import { ElectronService } from './providers/electron.service';




import { MaterialModule } from "./material/material.module";

// NGX-PAGINATION.--- ESTO NOS VA A SERVIR PARA LA PAGINACION

// AoT requires an exported function for factories
@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        NoopAnimationsModule,
        MatPaginatorModule,
        MaterialModule
             ],
    declarations: [AppComponent],
    providers: [ElectronService, AuthGuard, CasosService, AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {}
