import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { View2Page } from '../view2/view2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  view2 = View2Page;

  constructor(public navCtrl: NavController) {

  }

}
