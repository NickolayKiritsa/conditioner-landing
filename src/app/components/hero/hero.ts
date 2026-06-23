import {Component, signal} from '@angular/core';
import {PurchaseButton} from '../purchase-button/purchase-button';

@Component({
  selector: 'app-hero',
  imports: [
    PurchaseButton
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  title = signal('Преносим климатик без външно тяло');
  subtitle = signal('Видове, предимства и как да изберете');


}
