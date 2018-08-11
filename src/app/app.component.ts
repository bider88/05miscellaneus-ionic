import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SlidesPage } from '../pages/slides/slides';
import { SettingsProvider } from '../providers/settings/settings';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private _settingsProvider: SettingsProvider
  ) {
    platform.ready().then(() => {

      this._settingsProvider.loadStorage()
        .then(() => {

          console.log( this._settingsProvider.settings.show_tuto );

          if ( this._settingsProvider.settings.show_tuto ) {
            this.rootPage = SlidesPage;
          } else {
            this.rootPage = HomePage;
          }

          // This code will be loaded when load storage has finished
          // Okay, so the platform is ready and our plugins are available.
          // Here you can do any higher level native things you might need.
          statusBar.styleDefault();
          splashScreen.hide();

        }).catch ( (error) => {

          console.error( 'Error in settings: ', JSON.stringify( error ) );
          this.rootPage = SlidesPage;

        });
    });
  }
}

