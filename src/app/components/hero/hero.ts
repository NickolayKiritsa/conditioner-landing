import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  title = signal('Комфортный климат в вашем доме за 20 минут');
  subtitle = signal('Продажа и профессиональный монтаж инверторных кондиционеров с гарантией до 5 лет.');

  onOrder() {
    console.log('Клик по кнопке заказа. Открываем модалку или скроллим к форме.');
  }
}
