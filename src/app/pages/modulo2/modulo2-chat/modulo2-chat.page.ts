import { UtilsService } from './../../../services/utils.service';
import { ToastController } from '@ionic/angular';
import { FraseAllsituations } from './../../../models/frase-allsituations';
import { Router } from '@angular/router';
import { SentencesSituacao } from './../../../models/sentences-situacao';
import { AtividadeSentencesAllSit } from './../../../models/atividade-sentences-all-sit';
import { Component, Input, OnInit } from '@angular/core';
import { Modulo2Service } from 'src/app/services/modulo2.service';
import { ModalService, ToastService } from 'ng-zorro-antd-mobile';

export interface Chat {
  frasein: string;
  fraseout: string;
  data: Date;
}
@Component({
  selector: 'app-modulo2-chat',
  templateUrl: './modulo2-chat.page.html',
  styleUrls: ['./modulo2-chat.page.scss'],
})
export class Modulo2ChatPage implements OnInit {

  isloading: boolean = true;
  atividadeSentencesAllSit: AtividadeSentencesAllSit;
  id_atividadeSentencesAllSit: string
  situacao: SentencesSituacao;
  fraseallsituations: FraseAllsituations;
  _chat?: Chat[] = [] as Chat[];
  constructor(
    private modulo2Service: Modulo2Service,
    private router: Router,
    private _modal: ModalService,
    private utilService: UtilsService,
    private _toast: ToastService,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    this.situacao = this.modulo2Service.situacao;
    this.atividadeSentencesAllSit = this.modulo2Service.atividadeSentencesAllSit;
    this.isloading = false;

    console.log(this.situacao);

  }
  onLeftClick() {
    this.router.navigate(['sentencas-home/', this.modulo2Service.id_atividadeSentencesAllSit])
  }

  showPromptDefault(frase: FraseAllsituations) {
    this._modal.prompt(
      'Traduza a Sentença',
      ' ',
      [{ text: 'Cancel' },
      {
        text: 'Salvar', onPress: value => {
          frase.atidadefraseingles = value;
          frase.status = 'Concluido';
          this.utilService.preloadLogin();
          this.modulo2Service.save(frase.idsentenca, frase).then(
            rest => {
              this.utilService.loadingDemiss();
            }
          );
        }
      }],
      'default',
      [frase.atidadefraseingles]
    );
  }
  async presentToast(frase: FraseAllsituations) {
    const toast = await this.toastController.create({
      message: frase.fraseingles,
      duration: 2000,
      position: 'middle',

    });
    toast.present();
  }
}