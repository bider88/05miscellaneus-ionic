import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-view2',
  templateUrl: 'view2.html',
})
export class View2Page {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) {
  }

  gotoPage3() {
    this.navCtrl.push('Pagina3')
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad')  ;
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave');
  }

  ionViewWillUnload(){
    console.log('ionViewWillUnload');
  }

  ionViewCanEnter(){
    console.log('ionViewCanEnter');

    return new Promise( ( resolve, reject ) => {

      this.alertCtrl.create({
        title: '¿Seguro?',
        message: '¿Estás seguro de querer entrar?',
        enableBackdropDismiss: false,
        buttons: [
          {
            text: 'Cancelar',
            handler: () => resolve(false)
          },
          {
            text: 'Aceptar',
            handler: () => resolve(true)
          }
        ]
      }).present();

    })
  }

  ionViewCanLeave(){
    console.log('ionViewCanLeave');

    console.log('Wait 2 seconds to out');

    return new Promise( (resolve, reject) => {

      const loading = this.loadingCtrl.create({
        content: "Espere..."
      });

      loading.present();

      setTimeout(() => {
        loading.dismiss();
        resolve(true)
      }, 2000);
    })
  }

}
