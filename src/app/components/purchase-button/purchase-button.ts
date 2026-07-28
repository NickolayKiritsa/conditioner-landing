import {Component, input} from '@angular/core';

@Component({
  selector: 'app-purchase-button',
  imports: [],
  templateUrl: './purchase-button.html',
  styleUrl: './purchase-button.scss',
})
export class PurchaseButton {
  text = input<string>('Поръчай сега');
}
