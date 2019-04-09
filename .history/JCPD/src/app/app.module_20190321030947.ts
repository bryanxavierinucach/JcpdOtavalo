import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

  // SERVICIOS DE LA APLICACION JCPD

import { CasosService} from './services/casos.service';

import { ElectronService } from './providers/electron.service';

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
        ReactiveFormsModule
             ],
    declarations: [AppComponent],
    providers: [ElectronService, AuthGuard, CasosService],
    bootstrap: [AppComponent]
})
export class AppModule {}
