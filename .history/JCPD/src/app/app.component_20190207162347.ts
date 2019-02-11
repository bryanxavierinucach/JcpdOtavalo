import { ElectronService } from './providers/electron.service';
import { Component, OnInit } from '@angular/core';
import { AppConfig } from '../environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(public electronService: ElectronService) {

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
    }
}
