import { AccountService } from './../../account/account.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilsService } from 'src/app/services/utils.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var $ : any;
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  creds = {
    email: '',
    senha: ''
  };
  registerForm!: FormGroup;
  resetPws!: FormGroup;
  constructor(
    private utilServer: UtilsService,
    private accountService: AccountService,
    private navCtrl: NavController,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.showPws();

    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.resetPws = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  get f() { return this.registerForm.controls; }
  get f1() { return this.resetPws.controls; }
  async onSubmit() {
    // if (this.registerForm.valid) 
    {
      try {
        this.utilServer.preloadLogin();
        this.accountService.login(this.creds);

      } catch (error) {
        //console.error(error);
      }
    }
  }

  onSubmitreset() {

    /* if (this.resetPws.valid) {
 
       //console.log('reset efetuado');
       try {
         this.accountService.resetpws(this.login.username);
 
       } catch (error) {
         //console.error(error);
       }
     }
     */
  }
  showPws() {
    $('#showPassword').on('click', function () {


      // Get the password field
      var passwordField = $('#password');

      // Get the current type of the password field will be password or text
      var passwordFieldType = passwordField.attr('type');

      // Check to see if the type is a password field
      if (passwordFieldType == 'password') {
        // Change the password field to text
        passwordField.attr('type', 'text');
        $('#olho').addClass('fa-eye-slash');
        $("#olho").removeClass("fa-eye")

        // Change the Text on the show password button to Hide
        $(this).val('Hide');
      } else {
        // If the password field type is not a password field then set it to password
        passwordField.attr('type', 'password');
        $('#olho').removeClass('fa-eye-slash');
        $("#olho").addClass("fa-eye")
        // Change the value of the show password button to Show
        $(this).val('Show');
      }
    });
  }


  login() {
    console.log(this.creds);
    
    // Enabling Side Menu 
    if (this.creds.email == '' || this.creds.senha == '') {
      this.utilServer.presentAlert('Atenção', 'Obrigatório preencher seu email e senha')
      return false
    }
    if (!this.utilServer.testaEmail(this.creds.email)) {
      this.utilServer.presentAlert('Atenção', 'Verifique seu email e tente novamente')
      return false
    }
    this.utilServer.preloadLogin();
    this.accountService.login(this.creds);
    this.navCtrl.navigateRoot('/home', { animationDirection: 'forward' });
  }

}
