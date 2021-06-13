import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeGramaticaAdvFrequencyPageRoutingModule } from './home-gramatica-adv-frequency-routing.module';

import { HomeGramaticaAdvFrequencyPage } from './home-gramatica-adv-frequency.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeGramaticaAdvFrequencyPageRoutingModule
  ],
  declarations: [HomeGramaticaAdvFrequencyPage]
})
export class HomeGramaticaAdvFrequencyPageModule {}
