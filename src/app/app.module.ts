import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { SocialSharing } from '@ionic-native/social-sharing';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SportsPage } from './../pages/sports/sports';
import { ListPage } from '../pages/list/list';
import { NewsPage } from '../pages/news/news';
import { BusinessPage } from '../pages/business/business';
import { PoliticsPage } from '../pages/politics/politics';
import { CrimePage } from '../pages/crime/crime';
import {EPlatformPage} from '../pages/e-platform/e-platform';
import {ColumnsPage} from '../pages/columns/columns';
import {ArtsAndCulturePage} from '../pages/arts-and-culture/arts-and-culture';
import {CategoryPage} from '../pages/category/category';








import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WpapiProvider } from '../providers/wpapi/wpapi';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SportsPage,
    ListPage,
    NewsPage,
    BusinessPage,
    PoliticsPage,
    CrimePage,
    EPlatformPage,
    ColumnsPage,
    ArtsAndCulturePage,
    CategoryPage,





  ],
  imports: [
    BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SportsPage,
    ListPage,
    NewsPage,
    BusinessPage,
    PoliticsPage,
    CrimePage,
    EPlatformPage,
    ColumnsPage,
    ArtsAndCulturePage,
    CategoryPage


  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SocialSharing,
    WpapiProvider,
    
  ]
})
export class AppModule {}
