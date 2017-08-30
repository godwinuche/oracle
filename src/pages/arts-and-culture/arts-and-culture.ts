import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { ListPage } from "../list/list";

/**
 * Generated class for the ArtsAndCulturePage.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-arts-and-culture',
    templateUrl: 'arts-and-culture.html',
})
export class ArtsAndCulturePage {
        url: string = 'http://www.oraclenews.ng/wp-json/wp/v2/posts?categories=221';
       items: any;
        page: any;


  constructor(public navCtrl: NavController,private nav: NavController, public navParams: NavParams, private http:Http) {
  }

  ionViewDidEnter() {
		this.http.get( this.url )
	    .map(res => res.json())
	    .subscribe(data => {
	      // we've got back the raw data, now generate the core schedule data
	      // and save the data for later reference
	      this.items = data;
	    });
  }
    itemTapped(event, item) {
		this.nav.push(ListPage, {
		  item: item
		});
	}
}




















