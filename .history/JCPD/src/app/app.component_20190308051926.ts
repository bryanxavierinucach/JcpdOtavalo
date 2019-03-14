import { ElectronService } from './providers/electron.service';
import { Component, OnInit } from '@angular/core';
import { AppConfig } from '../environments/environment';
import { TokenStorageService } from './auth/token-storage.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private roles: string[];
  public authority: string;
    constructor(public electronService: ElectronService, private tokenStorage: TokenStorageService) {

        console.log('AppConfig', AppConfig);
        if (electronService.isElectron()) {
          console.log('Mode electron');
          console.log('Electron ipcRenderer', electronService.ipcRenderer);
          console.log('NodeJS childProcess', electronService.childProcess);
        } else {
          console.log('Mode web');
        }
      }

    ngOnInit() {
      if (this.tokenStorage.getToken()) {
        this.roles = this.tokenStorage.getAuthorities();
        this.roles.every(role => {
          if (role === 'ROLE_ADMIN') {
            this.authority = 'admin';
            return false;
          } else if (role === 'ROLE_PM') {
            this.authority = 'pm';
            return false;
          }
          this.authority = 'user';
          return true;
        });
    }
}
