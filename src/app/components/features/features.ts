import {Component, signal} from '@angular/core';
import {PurchaseButton} from '../purchase-button/purchase-button';
interface Feature {
  icon: string;
  title: string;
  description: string;
}
@Component({
  selector: 'app-features',
  imports: [
    PurchaseButton
  ],
  templateUrl: './features.html',
  styleUrl: './features.scss',
})
export class Features {
  features = signal<Feature[]>([
    {
      icon: '❄️',
      title: 'Ультратихий режим',
      description: 'Уровень шума всего 19 дБ. Работает тише, чем шелест листьев — идеален для спальни.'
    },
    {
      icon: '📱',
      title: 'Wi-Fi Управление',
      description: 'Включайте охлаждение по дороге домой через приложение на смартфоне или Алису.'
    },
    {
      icon: '⚡',
      title: 'Класс энергоэффективности A+++',
      description: 'Инверторный компрессор экономит до 40% электроэнергии по сравнению с обычными системами.'
    },
    {
      icon: '🛡️',
      title: 'Очистка воздуха Plasma',
      description: 'Встроенный ионизатор уничтожает до 99% бактерий, вирусов и задерживает мелкую пыль.'
    }
  ]);
  onOrder() {
    console.log('Пользователь нажал кнопку заказа');
    // Здесь ваша логика: открытие формы, переход в корзину и т.д.
  }
}
