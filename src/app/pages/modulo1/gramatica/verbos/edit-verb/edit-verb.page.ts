import { TempoVerbal } from './../../../../../models/atividade-verbo';

import { PopoverConjugacaoConditionalPage } from './../popover-conjugacao-conditional/popover-conjugacao-conditional.page';
import { UtilsService } from 'src/app/services/utils.service';

import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { HomeGramaticaVerbService } from 'src/app/services/home-gramatica-verb.service';
import { AtividadeVerbo } from 'src/app/models/atividade-verbo';
import { EstruturaFrase } from 'src/app/models/estrutura-frase';

@Component({
  selector: 'app-edit-verb',
  templateUrl: './edit-verb.page.html',
  styleUrls: ['./edit-verb.page.scss'],
})
export class EditVerbPage implements OnInit {
  id: string;
  rulers: string;
  isloading: boolean = true;
  listasegmento: any[] = ['Presente', 'Presente Continuo', 'Passado', 'Futuro'];

  tempoverbal: string = 'Presente'


  @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
  @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;
  atividadeVerb: AtividadeVerbo;
  constructor(private popoverCtrl: PopoverController,
    public alertController: AlertController,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private utilService: UtilsService,
    private homeGramatica: HomeGramaticaVerbService,

  ) { }

  ngOnInit() {
    this.isloading = true;

    this.atividadeVerb = {} as AtividadeVerbo;
    this.utilService.preloadLogin();
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.homeGramatica.findAtividadeVerboId(this.id).then(
      response => {
        this.utilService.loadingDemiss();
        this.atividadeVerb = response;
        /* let direcao = 'translatorpttoen'
         let texto = this.atividadeVerb.atividadesverbais.passado.regra
          
           this.homeGramatica.ontranlator(direcao, texto)
             .then(
               rest => {
                 this.rulers = rest.fraseingles;
                 console.log(this.rulers);
                 
               }
             )
             */
        this.isloading = false;


      }
    )

  }


  onLeftClick() {
    this.router.navigate(['list-verb']);
  }
  save() {
    this.homeGramatica.saveAtividadeVerbo(this.atividadeVerb).then(
      rest => {
        this.utilService.toast('Atividade Salvo com sucesso', "Sucesso");
      }
    )
  }


  finalizar() {
    this.presentAlertConfirm();
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmação!',
      mode: 'ios',
      message: 'Deseja finalizar estudo?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: ( ) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            this.onconcluir();
          }
        }
      ]
    });

    await alert.present();
  }



  async presentPopovercondicional(ev: any) {
    const popover = await this.popoverCtrl.create({
      componentProps: { 'id': this.atividadeVerb.verb.root.conjugation_tables.conditional },
      component: PopoverConjugacaoConditionalPage,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentPopoverindicative(ev: any) {
    const popover = await this.popoverCtrl.create({
      componentProps: { 'id': this.atividadeVerb.verb.root.conjugation_tables.indicative },
      component: PopoverConjugacaoConditionalPage,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  async presentPopoverpassive(ev: any) {
    const popover = await this.popoverCtrl.create({
      componentProps: { 'id': this.atividadeVerb.verb.root.conjugation_tables.passive },
      component: PopoverConjugacaoConditionalPage,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  /******** Segmento */
  choose(event) {
    console.log('index: ', event.selectedIndex, 'value: ', event.value);
    this.tempoverbal = event.value;
  }

  onconcluir() {
    let confirmed = true;


    {
      //presente.afirmativo
      if (this.atividadeVerb.atividadesverbais.presente.afirmativo.frases.fraseingles === null) {
        this.utilService.toast('É necessário uma frase no presente afirmativo', 'Alerta');
        confirmed=false;
        return;
      } else {
        if (this.atividadeVerb.atividadesverbais.presente.afirmativo.frases.fraseportugues === null) {
          let texto = this.atividadeVerb.atividadesverbais.presente.afirmativo.frases.fraseingles;
          this.homeGramatica.ontranlator('translatorentopt', texto)
            .then(
              rest => {
                this.atividadeVerb.atividadesverbais.presente.afirmativo.frases.fraseportugues = rest.fraseportugues;
              }
            );
        }
      }
      //presente.negativo
      if (this.atividadeVerb.atividadesverbais.presente.negativo.frases.fraseingles === null) {
        this.utilService.toast('É necessário uma frase no presente negativo', 'Alerta');
        confirmed=false;
        return;

      } else {
        if (this.atividadeVerb.atividadesverbais.presente.negativo.frases.fraseportugues === null) {
          let texto = this.atividadeVerb.atividadesverbais.presente.negativo.frases.fraseingles;
          confirmed=false;
          this.homeGramatica.ontranlator('translatorentopt', texto)
            .then(
              rest => {
                this.atividadeVerb.atividadesverbais.presente.negativo.frases.fraseportugues = rest.fraseportugues;
              }
            );
        }
      }
      //presente.negativo
      if (this.atividadeVerb.atividadesverbais.presente.pergunta.frases.fraseingles === null) {
        this.utilService.toast('É necessário uma frase no presente  formato de pergunta', 'Alerta');
        confirmed=false;
        return;
      } else {
        if (this.atividadeVerb.atividadesverbais.presente.pergunta.frases.fraseportugues === null) {
          let texto = this.atividadeVerb.atividadesverbais.presente.pergunta.frases.fraseingles;
          this.homeGramatica.ontranlator('translatorentopt', texto)
            .then(
              rest => {
                this.atividadeVerb.atividadesverbais.presente.pergunta.frases.fraseportugues = rest.fraseportugues;
              }
            );
        }
      }
      //presente continuo
      if (this.atividadeVerb.atividadesverbais.presentecontinuo.frases.fraseingles === null) {
        this.utilService.toast('É necessário uma frase no  presente contínuo', 'Alerta');
        confirmed=false;
        return;
      } else {
        if (this.atividadeVerb.atividadesverbais.presentecontinuo.frases.fraseportugues === null) {
          let texto = this.atividadeVerb.atividadesverbais.presentecontinuo.frases.fraseingles;
          this.homeGramatica.ontranlator('translatorentopt', texto)

            .then(
              rest => {
                this.atividadeVerb.atividadesverbais.presentecontinuo.frases.fraseportugues = rest.fraseportugues;
              }
            );
        }
      }
      //Passado
      if (this.atividadeVerb.atividadesverbais.passado.frases.fraseingles === null) {
        this.utilService.toast('É necessário uma frase no passado', 'Alerta');
        confirmed=false;
        return;

      } else {
        if (this.atividadeVerb.atividadesverbais.passado.frases.fraseportugues === null) {
          let texto = this.atividadeVerb.atividadesverbais.passado.frases.fraseingles;
          this.homeGramatica.ontranlator('translatorentopt', texto)

            .then(
              rest => {
                this.atividadeVerb.atividadesverbais.passado.frases.fraseportugues = rest.fraseportugues;
              }
            );
        }
      }
      //futuro
      if (this.atividadeVerb.atividadesverbais.futuro.frases.fraseingles === null) {
        this.utilService.toast('É necessário uma frase no futuro', 'Alerta');
        confirmed=false;
        return;
      } else {
        if (this.atividadeVerb.atividadesverbais.futuro.frases.fraseportugues === null) {
          let texto = this.atividadeVerb.atividadesverbais.futuro.frases.fraseingles;
          this.homeGramatica.ontranlator('translatorentopt', texto)

            .then(
              rest => {
                this.atividadeVerb.atividadesverbais.futuro.frases.fraseportugues = rest.fraseportugues;;
              }
            );
        }
      }
      if (confirmed) {
        //presente.afirmativo
        this.atividadeVerb.atividadesverbais.presente.afirmativo.frases.status = 'Concluido';

        //presente.negativo          
        this.atividadeVerb.atividadesverbais.presente.negativo.frases.status = 'Concluido';

        //presente.negativo     
        this.atividadeVerb.atividadesverbais.presente.pergunta.frases.status = 'Concluido';

        //presente continuo           
        this.atividadeVerb.atividadesverbais.presentecontinuo.frases.status = 'Concluido';

        //Passado
        this.atividadeVerb.atividadesverbais.passado.frases.status = 'Concluido';

        //futuro           
        this.atividadeVerb.atividadesverbais.futuro.frases.status = 'Concluido';

        this.homeGramatica.concluirAtividadeVerbo(this.atividadeVerb)
          .subscribe(
            rest => this.router.navigate(['list-verb'])
          );
      }
    }


  }
}
