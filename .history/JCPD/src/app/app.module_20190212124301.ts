import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';

  // SERVICIOS DE LA APLICACION JCPD

import { CasosService} from './services/casos.service';
import { AuthService } from './services/auth.service';


// NG Translate

import { ElectronService } from './providers/electron.service';





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
        AppRoutingModule,
        FormsModule
    ],
    declarations: [AppComponent],
    providers: [ElectronService, AuthGuard, CasosService, AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {}
