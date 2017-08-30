import { Component } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { NavController} from 'ionic-angular';
import { ListPage } from "../list/list";
import { LoadingController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';


@Component({
	templateUrl: 'home.html'

	
})
export class HomePage {
  
  url: string = 'http://www.oraclenews.ng/wp-json/wp/v2/posts';
  items: any;
	page: any;
	
	
	constructor( public navCtrl:NavController, private http: Http, private nav: NavController, public loadingCtrl: LoadingController, private sharingVar:SocialSharing) {}
	
	otherShare(){
  this.sharingVar.share( "General Share Sheet", null, null, "http://www.oraclenews.ng")
	
   .then(() => {
           alert('Shared!');
		},
				).catch((err) => {
    console.log('Oops, something went wrong:', err);
    });
  }
	
	
	
	presentLoading() {
    	let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 10000
   		 });
   		loader.present();
 									     }
	
	doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }


	ionViewDidEnter() {
	   this.page = '1';

		this.loadPosts( this.page ).then( data => {
			console.log('Posts loaded', data);
			this.items = data;
		});
	}

	loadPosts( page ) {

		if( !page ) {
	      let page = '1';
	    }

		return new Promise(resolve => {

			this.http.get( this.url + '?page=' + page )
		    .map(res => res.json())
		    .subscribe(data => {
		      // we've got back the raw data, now generate the core schedule data
		      // and save the data for later reference
		      resolve( data );
		    });

		});
	}




	
	itemTapped(event, item) {
		this.nav.push(ListPage, {
		  item: item
		});
	}

	loadMore(infiniteScroll) {

	    this.page++;

	    this.loadPosts( this.page ).then( items => {
	      // Loads posts from WordPress API
	      let length = items["length"];

	      if( length === 0 ) {
	        infiniteScroll.complete();
	        return;
	      }

	      for (var i = length - 1; i >= 0; i--) {
	        this.items.push( items[i] );
	      }

	      infiniteScroll.complete();
	    });
	}
}





