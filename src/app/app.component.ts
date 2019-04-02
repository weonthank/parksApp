import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ParkData } from './providers/park-data';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [ParkData]
})

export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public parkData: ParkData
  ) {
    this.initializeApp();
    console.log(parkData.load());
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  

}
