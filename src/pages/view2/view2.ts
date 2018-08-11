import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-view2',
  templateUrl: 'view2.html',
})
export class View2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

    const number: number = Math.round(Math.random() * 10);
    console.log(number);

    return number >= 3;
  }

  ionViewCanLeave(){
    console.log('ionViewCanLeave');

    console.log('Wait 2 seconds to out');

    return new Promise( (resolve, reject) => {

      setTimeout(() => {
        resolve(true)
      }, 2000);
    })
  }

}
