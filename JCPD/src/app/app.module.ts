import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';

  // SERVICIOS DE LA APLICACION JCPD

import { CasosService} from './services/casos.service';

// NGX-PAGINATION.--- ESTO NOS VA A SERVIR PARA LA PAGINACION

import {NgxPaginationModule} from 'ngx-pagination';
// AoT requires an exported function for factories

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        NgxPaginationModule,
        AppRoutingModule
    ],
    declarations: [AppComponent],
    providers: [AuthGuard, CasosService],
    bootstrap: [AppComponent]
})
export class AppModule {}
