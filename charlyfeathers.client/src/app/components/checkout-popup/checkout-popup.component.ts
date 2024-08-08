import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'cfs-checkout-popup',
  standalone: true,
  imports: [NgClass],
  templateUrl: './checkout-popup.component.html',
  styleUrl: './checkout-popup.component.css'
})
export class CheckoutPopupComponent {
  isRegisterTabActive: boolean = false;
  isCheckoutPopupActive: boolean = false;

}
