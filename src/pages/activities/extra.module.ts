import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivitiesPage } from './extra';

@NgModule({
  declarations: [
    ActivitiesPage,
  ],
  imports: [
    IonicPageModule.forChild(ActivitiesPage),
  ],
})
export class ActivitiesPageModule {}
