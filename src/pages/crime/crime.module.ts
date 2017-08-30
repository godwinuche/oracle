import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrimePage } from './crime';

@NgModule({
  declarations: [
    CrimePage,
  ],
  imports: [
    IonicPageModule.forChild(CrimePage),
  ],
})
export class CrimePageModule {}
