import {Component, signal} from '@angular/core';
<<<<<<< HEAD

@Component({
  selector: 'app-hero',
  imports: [],
=======
import {PurchaseButton} from '../purchase-button/purchase-button';

@Component({
  selector: 'app-hero',
  imports: [
    PurchaseButton
  ],
>>>>>>> 46d31c0e8b2ee33b524240789f79ca438e1ed673
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
<<<<<<< HEAD
  title = signal('Комфортный климат в вашем доме за 20 минут');
  subtitle = signal('Продажа и профессиональный монтаж инверторных кондиционеров с гарантией до 5 лет.');

  onOrder() {
    console.log('Клик по кнопке заказа. Открываем модалку или скроллим к форме.');
  }
=======
  title = signal('Преносим климатик без външно тяло');
  subtitle = signal('Видове, предимства и как да изберете');


>>>>>>> 46d31c0e8b2ee33b524240789f79ca438e1ed673
}
