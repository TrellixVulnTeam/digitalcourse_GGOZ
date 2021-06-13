import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
@Injectable({
	providedIn: 'root'
})
export class UtilsService {

	loadingcnt: any
	timeoutld: boolean = false
	constructor(
		public alertController: AlertController,
		public loadingCtrl: LoadingController,

		public toastCtrl: ToastController,
	) { }

	testaEmail(email: string): boolean {
		const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
		return expression.test(String(email).toLowerCase())
	}
	async presentAlert(titulo: string, msg: string) {
		this.loadingCtrl.dismiss();
		const alert = await this.alertController.create({
			header: titulo,
			message: msg,
			buttons: ['OK']
		});
		await alert.present();
	}
	loadingDemiss() {
		try {
		 	this.loadingcnt.dismiss();
		} catch (error) {
			
		}
	}
	async preloadLogin(){
		this.loadingcnt = await this.loadingCtrl.create({
			spinner: "bubbles",
			message: 'Aguarde...',
			translucent: true,
		});
		let self = this
		setTimeout(function(){			 
			self.loadingcnt.dismiss();		 
		}, 500);
	
		return this.loadingcnt.present();
	}
	async toast(texto,title){
	const toast = await this.toastCtrl.create({
		header: title,
		message: texto,
		position: 'middle',
		buttons: [
		  {
			text: 'ok',
			role: 'cancel',
			handler: () => {
			  console.log('Cancel clicked');
			}
		  }
		]
	  });
	  await toast.present();
}
}
