import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ColumnsPage } from './columns';

@NgModule({
  declarations: [
    ColumnsPage,
  ],
  imports: [
    IonicPageModule.forChild(ColumnsPage),
  ],
})
export class ColumnsPageModule {}
