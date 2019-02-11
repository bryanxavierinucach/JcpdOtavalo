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
import { AuthService } from './services/auth.service';


// NG Translate

import { ElectronService } from './providers/electron.service';





// NGX-PAGINATION.--- ESTO NOS VA A SERVIR PARA LA PAGINACION

import {NgxPaginationModule} from 'ngx-pagination';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { Page404Component } from './user/page404/page404.component';
// AoT requires an exported function for factories
import { from } from 'rxjs';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        NgxPaginationModule,
        AppRoutingModule
    ],
    declarations: [AppComponent, LoginComponent, RegisterComponent, ProfileComponent, Page404Component],
    providers: [ElectronService, AuthGuard, CasosService, AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {}
