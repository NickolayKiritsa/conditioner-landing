import {Component, output, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  text: string;
  rating: number;
}
@Component({
  selector: 'app-reviews',
  imports: [
    RouterLink
  ],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss',
})
export class Reviews {
  readonly maxCharsLimit = 140; // Порог для показа кнопки "Читать полностью"

  currentIndex = signal(0);
  expandedCardId = signal<number | null>(null);

  // Кастомный Output для перехода к модальному окну/отдельной странице отзывов
  seeAllRequested = output<void>();

  testimonials = signal<Testimonial[]>([
    {
      id: 1,
      name: 'Георги Стоянов',
      role: '(28 г.) — гр. София',
      avatar: 'https://i.pravatar.cc/150?img=47',
      text: 'Живея под наем в София и хазяинът не дава да дупчим стени за голям климатик. Arctic Air Ultra ми спаси лятото! Слагам го точно до лаптопа, докато работя. Захранвам го директно през USB от компютъра. Не очаквайте да охлади цяла стая от 30 кв.м. — това е уред за лична употреба и действа страхотно на метър-два от теб. За 49 евро е супер инвестиция.',
      rating: 5
    },
    {
      id: 2,
      name: 'Елена Петрова',
      role: '(42 г.) — гр. Пловдив',
      avatar: 'https://i.pravatar.cc/150?img=12',
      text: 'В Пловдив жегите през юли са непоносими. Взех уреда за детската стая, защото от стандартния климатик децата бързо настиват заради силното течение. Arctic Air Ultra работи тихо, овлажнява въздуха и ползва само чиста вода — без никакви химикали и фреон. Единствено резервоарът трябва да се допълва на всеки 6-8 часа, ако работи нон-стоп, но това отнема секунди. Децата обожават LED светлините нощем!',
      rating: 4
    },
    {
      id: 3,
      name: 'Елена Васильева',
      role: 'CEO, StartupLab',
      avatar: 'https://i.pravatar.cc/150?img=32',
      text: 'В Русе лятото е страшно, а сметките ми за ток с голям климатик стават много високи. Взех си този мини климатик за спалнята. Сипвам му студена вода, понякога слагам и 2-3 кубчета лед за още по-хладен въздух, и го пускам на най-ниската скорост за през нощта. Издържа ми цяла нощ с едно пълнене, а сметката за ток въобще не се промени. Доставиха го за 2 дни с плащане при получаване.',
      rating: 5
    }
  ]);

  next(): void {
    this.currentIndex.update(idx => (idx + 1) % this.testimonials().length);
    this.expandedCardId.set(null);
  }

  prev(): void {
    this.currentIndex.update(idx =>
      idx === 0 ? this.testimonials().length - 1 : idx - 1
    );
    this.expandedCardId.set(null);
  }

  selectCard(index: number): void {
    this.currentIndex.set(index);
  }

  toggleExpand(event: Event, id: number): void {
    event.stopPropagation(); // Чтобы клик не перехватывался выбором карточки
    this.expandedCardId.update(currentId => currentId === id ? null : id);
  }

  onSeeAllClick(): void {
    this.seeAllRequested.emit();
  }

  getCardPosition(index: number): 'active' | 'prev' | 'next' | 'hidden' {
    const total = this.testimonials().length;
    const current = this.currentIndex();

    if (index === current) return 'active';
    if (index === (current - 1 + total) % total) return 'prev';
    if (index === (current + 1) % total) return 'next';
    return 'hidden';
  }
}
