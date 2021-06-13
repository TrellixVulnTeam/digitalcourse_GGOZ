import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController, ModalController, NavController, NavParams, PopoverController, Platform } from '@ionic/angular';
import { Conditional } from 'src/app/models/Verb'; 


export interface ActionSheetButton {
  text?: string;
  role?: 'cancel' | 'destructive' | 'selected' | string;
  icon?: string;
  cssClass?: string | string[];
  handler?: () => boolean | void | Promise<boolean | void>;
}

 
@Component({
  selector: 'app-popover-conjugacao-conditional',
  templateUrl: './popover-conjugacao-conditional.page.html',
  styleUrls: ['./popover-conjugacao-conditional.page.scss'],
  styles:[
    `    .redb {
      color: brown;
  }
  `
  ]
})


export class PopoverConjugacaoConditionalPage implements OnInit {
conjugacao:Conditional[];
state: boolean = false;

texto:ActionSheetButton[]=[] as ActionSheetButton[];

conditional:Conditional={} as Conditional;
  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private activatedRoute: ActivatedRoute,
    private popover: PopoverController,
    private modalController: ModalController,
    private platform: Platform,
    private actionsheetCtrl: ActionSheetController
  ) {
    // this.items = this.navParams.get('id');

  }
  ngOnInit() {     
    this.conjugacao = this.navParams.get('id');
    console.log(this.conjugacao)
  }
  ClosePopover() {
    this.state =false;
    this.popover.dismiss();
  }
  
  async presentModal(item:Conditional) {
    this.texto =[] as ActionSheetButton[];
    console.log(item);
   this.conditional=item;  
   this.conditional.forms.forEach(form => {
     let t:ActionSheetButton ={} as ActionSheetButton;
     t.text=form[0] + " " + form[1] ;
     t.cssClass='redb';
     this.texto.push(t);
   });
   console.log(this.texto);
   let actionSheet = this.actionsheetCtrl.create({
     
    cssClass: 'action-sheets-basic-page',
    buttons:this.texto
  });
  (await actionSheet).present();
   //this.showModal();
    /*const modal = await this.modalController.create({
      component: ModalConjugacaoPage,
      componentProps: { 'id':   item},
      cssClass: 'my-custom-class'
    });
    return await modal.present();
    */
  }
 
  dismiss() {
    this.state =false;
    this.popover.dismiss();
  }
  showModal() {
    this.state = true;
  }
}
