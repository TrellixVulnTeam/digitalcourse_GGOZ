import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment, IonSlides, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-modulo1-home',
  templateUrl: './modulo1-home.page.html',
  styleUrls: ['./modulo1-home.page.scss'],
})
export class Modulo1HomePage implements OnInit {

  segment = '';
  index = 0;
   
  slideOpts = {
    effect: 'flip',
    zoom: false
  };
  
  segmentModel = "gramatica";

  segmentChanged(event){
    console.log(this.segmentModel);
    
    console.log(event);
  }

  constructor(
    private activatedRoute: ActivatedRoute,) { }

  ngOnInit() {
  }

}
