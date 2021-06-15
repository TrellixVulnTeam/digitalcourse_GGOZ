import { AccountService } from 'src/app/account/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(
    private account:AccountService
  ) { }

  ngOnInit() {
  }
  onClick(){
   this.account.logout();
  }
}
