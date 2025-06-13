import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email = '';
  password = '';

  constructor(private modalCtrl: ModalController) {}

  closeModal() {
    this.modalCtrl.dismiss();
  }

  login() {
    console.log('Login:', this.email, this.password);
    this.modalCtrl.dismiss();
  }
}
