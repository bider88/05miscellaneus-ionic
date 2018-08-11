import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Platform } from 'ionic-angular';

@Injectable()
export class SettingsProvider {

  settings = {
    show_tuto: true
  }

  constructor(
    private platform: Platform,
    private storage: Storage
  ) {
    console.log('Hello SettingsProvider Provider');
  }

  loadStorage() {

    return new Promise( (resolve, reject) => {

      if ( this.platform.is('cordova') ) {

        console.log('loading storage');

        this.storage.get('settings')
        .then( ( settings ) => {

          if ( settings ) {

            this.settings = settings;
          }

          console.log('Ready storage......')

          resolve();

        }, (err) => {

          console.log('Error on load settings: ', JSON.stringify(err));
          reject( err );

        });

      } else {

        if ( localStorage.getItem('settings') ) {
          this.settings = JSON.parse( localStorage.getItem('settings') );
        }

        resolve();
      }

    })
  }

  saveStorage() {
    if ( this.platform.is('cordova') ) {

      this.storage.ready()
      .then( () => {

        this.storage.set('settings', this.settings);

      });

    } else {
      localStorage.setItem('settings', JSON.stringify(this.settings))
    }
  }

}
