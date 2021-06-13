import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-verb',
  templateUrl: './list-verb.page.html',
  styleUrls: ['./list-verb.page.scss'],
})
export class ListVerbPage implements OnInit {
 
  segmentModel = "aberto";
  constructor( 
    private route:Router,
  ) { }

  ngOnInit() {
  }

  segmentChanged(event){
    console.log(this.segmentModel);
    
    console.log(event);
  }
  onLeftClick() {
    this.route.navigate(['home/modulo1-home']);
  }
}
