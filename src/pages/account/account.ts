import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MemesProvider } from "../../providers/memes/memes";

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private memesService: MemesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
    this.memesService.getMemes().subscribe(respuesta => {console.log(respuesta)})
  }

}
