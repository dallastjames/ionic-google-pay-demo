import { Component } from '@angular/core';
import { GooglePayService } from './google-pay.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private googlePay: GooglePayService) {}

  public initWeb(): void {
    this.googlePay.init();
  }

  public canMakePayment(): void {
    this.googlePay.canMakePayment();
  }

  public makePaymentRequest(): void {
    this.googlePay.makePaymentRequest();
  }
}
