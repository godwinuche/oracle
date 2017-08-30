import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArtsAndCulturePage } from './arts-and-culture';

@NgModule({
  declarations: [
    ArtsAndCulturePage,
  ],
  imports: [
    IonicPageModule.forChild(ArtsAndCulturePage),
  ],
})
export class ArtsAndCulturePageModule {}
