import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SportsPage } from "../pages/sports/sports";
import { PoliticsPage } from "../pages/politics/politics";
import { NewsPage } from "../pages/news/news";
import { BusinessPage } from "../pages/business/business";
import { CrimePage } from "../pages/crime/crime";
import { EPlatformPage } from "../pages/e-platform/e-platform";
import { ColumnsPage } from "../pages/columns/columns";
import { ArtsAndCulturePage } from "../pages/arts-and-culture/arts-and-culture";
import { CategoryPage } from "../pages/category/category";



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'News', component:NewsPage },
      { title: 'Business', component:BusinessPage },
      { title: 'Politics', component:PoliticsPage},
      { title: 'Crime', component:CrimePage },
      { title: 'e-Platform', component:EPlatformPage},
      { title: 'Columns', component:ColumnsPage },
      { title: 'Arts & Culture', component:ArtsAndCulturePage },
      { title: 'Sports', component:SportsPage },
      { title: 'App Info', component:CategoryPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
