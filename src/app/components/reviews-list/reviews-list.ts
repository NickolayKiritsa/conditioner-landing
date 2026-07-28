import {Component, OnInit, inject, signal, computed} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {RouterLink} from '@angular/router';
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  text: string;
  rating: number;
  date: Date;
}
@Component({
  selector: 'app-reviews-list',
  imports: [
    RouterLink
  ],
  templateUrl: './reviews-list.html',
  styleUrl: './reviews-list.scss',
})
export class ReviewsList implements OnInit {
  private meta = inject(Meta);
  private title = inject(Title);

  ngOnInit(): void {
    this.title.setTitle('Arctic Air Ultra Мнения и Отзиви от Клиенти в България');

    this.meta.updateTag({
      name: 'description',
      content: 'Прочетете реални мнения и отзиви за преносим климатик Arctic Air Ultra от купувачи от София, Пловдив, Варна и Бургас. Вижте предимствата и поръчайте с 50% отстъпка!'
    });

    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow'
    });

    this.meta.updateTag({
      property: 'og:title',
      content: 'Отзиви от Клиенти в България'
    });

    this.meta.updateTag({
      property: 'og:description',
      content: 'Прочетете реални мнения и отзиви за преносим климатик Arctic Air Ultra от купувачи от София, Пловдив, Варна и Бургас. Вижте предимствата и поръчайте с 50% отстъпка!'
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'website'
    });
  }


  maxCharsLimit = 150;

  testimonials = signal<Testimonial[]>([
    {
      id: 1,
      name: 'Георги Стоянов',
      role: '(28 г.) — гр. София',
      avatar: 'https://i.pravatar.cc/150?img=32',
      text: 'Живея под наем в София и хазяинът не дава да дупчим стени за голям климатик. Arctic Air Ultra ми спаси лятото! Слагам го точно до лаптопа, докато работя. Захранвам го директно през USB от компютъра. Не очаквайте да охлади цяла стая от 30 кв.м. — това е уред за лична употреба и действа страхотно на метър-два от теб. За 49 евро е супер инвестиция.',
      rating: 5,
      date: new Date('2026-05-10')
    },
    {
      id: 2,
      name: 'Елена Петрова ',
      role: '(42 г.) — гр. Пловдив',
      avatar: 'https://i.pravatar.cc/150?img=12',
      text: '„ Пловдив жегите през юли са непоносими. Взех уреда за детската стая, защото от стандартния климатик децата бързо настиват заради силното течение. Arctic Air Ultra работи тихо, овлажнява въздуха и ползва само чиста вода — без никакви химикали и фреон. Единствено резервоарът трябва да се допълва на всеки 6-8 часа, ако работи нон-стоп, но това отнема секунди. Децата обожават LED светлините нощем',
      rating: 4,
      date: new Date('2026-06-01')
    },
    {
      id: 3,
      name: 'Димитър Димитров',
      role: '(61 г.) — гр. Русе',
      avatar: 'https://i.pravatar.cc/150?img=47',
      text: 'В Русе лятото е страшно, а сметките ми за ток с голям климатик стават много високи. Взех си този мини климатик за спалнята. Сипвам му студена вода, понякога слагам и 2-3 кубчета лед за още по-хладен въздух, и го пускам на най-ниската скорост за през нощта. Издържа ми цяла нощ с едно пълнене, а сметката за ток въобще не се промени. Доставиха го за 2 дни с плащане при получаване.',
      rating: 5,
      date: new Date('2026-04-15')
    },
    {
      id: 4,
      name: 'Мария Иванова',
      role: '(34 г.) — гр. Варна',
      avatar: 'https://i.pravatar.cc/150?img=47',
      text: 'Купихме го за вилата край Варна и за караваната. Изключително компактен и лек. Най-хубавото е, че работи перфектно от обикновена външна батерия (powerbank). Като се върнем от плажа, го пускаме веднага и за броени минути около нас става хладно и свежо. За тази цена от 49 евро офертата е страхотна!',
      rating: 5,
      date: new Date('2026-04-15')
    },
    {
      id: 5,
      name: 'Николай Колев',
      role: '(36 г.) — гр. Бургас',
      avatar: 'https://i.pravatar.cc/150?img=47',
      text: 'Честно казано, бях скептичен за 49 евро. Важно е обаче човек да разбере какво купува — това не е компресорен климатик за 1000 лева за огромен хол, а личен охладител. Духа наистина хладен въздух благодарение на водата. На третата (максимална) скорост перката се чува малко повече, но на първа е напълно тиха. Платих на куриера при преглед, всичко беше коректно.',
      rating: 4,
      date: new Date('2026-04-15')
    },
    {
      id: 6,
      name: 'Снежана Тодорова ',
      role: '(50 г.) — гр. Стара Загора',
      avatar: 'https://i.pravatar.cc/150?img=47',
      text: 'Поръчах го за работното ми място, където бюрото ми е далеч от климатика и следобед става много горещо. Уредът е много тих, има 3 скорости и овлажнява приятно. Бърза доставка до Стара Загора само за 2 дни. Препоръчвам!',
      rating: 5,
      date: new Date('2026-04-15')
    },
    {
      id: 7,
      name: 'Христо Василев',
      role: '(31 г.) — гр. София',
      avatar: 'https://i.pravatar.cc/150?img=47',
      text: 'Работя от вкъщи в София и следобед слънцето бие директно в прозореца ми. Взех си Arctic Air, за да не държа големия климатик пуснат цял ден в целия апартамент. Охлажда точно въздушната зона около стола и бюрото ми. Кабелът можеше да е идея по-дълъг, но го включвам в разклонителя и нямам грижи. Доставиха го много бързо.',
      rating: 5,
      date: new Date('2026-04-15')
    },
    {
      id: 8,
      name: 'Кремена Димова',
      role: '(39 г.) — гр. Пловдив',
      avatar: 'https://i.pravatar.cc/150?img=47',
      text:'Много практичен малък уред! Ползвам го в кухнята в Пловдив, докато готвя, защото там фурната прави ужасен furnace. Слагам ледена вода от хладилника и направо ме спасява. Лесен за измиване филтър, не заема място. Страхотна покупка за лятото',
      rating: 5,
      date: new Date('2026-04-15')
    },
    {
      id: 9,
      name: 'Петър Радев',
      role: '(45 г.) — гр. Варна',
      avatar: 'https://i.pravatar.cc/150?img=47',
      text: '„Взехме го за спалнята във Варна, понеже морската влага и жегата нощем не се издържат. Уредът прави приятен хладен бриз и се спи много по-леко. Когато водата свърши след 7-8 часа, продължава да духа като обикновен вентилатор, така че пак е добре. За 49 евро си струва всяка стотинка',
      rating: 4,
      date: new Date('2026-04-15')
    }
  ]);

  // Фильтры и поиск
  searchQuery = signal<string>('');
  selectedRating = signal<number | null>(null);
  sortBy = signal<'newest' | 'highest' | 'lowest'>('newest');

  // Набор ID развернутых карточек
  expandedIds = signal<Set<number>>(new Set());

  // Вычисляемый отфильтрованный список
  filteredTestimonials = computed(() => {
    let list = [...this.testimonials()];

    // 1. Поиск по тексту/имени
    const query = this.searchQuery().toLowerCase().trim();
    if (query) {
      list = list.filter(item =>
        item.text.toLowerCase().includes(query) ||
        item.name.toLowerCase().includes(query)
      );
    }

    // 2. Фильтр по рейтингу
    const rating = this.selectedRating();
    if (rating !== null) {
      list = list.filter(item => item.rating === rating);
    }

    // 3. Сортировка
    const sort = this.sortBy();
    if (sort === 'newest') {
      list.sort((a, b) => b.date.getTime() - a.date.getTime());
    } else if (sort === 'highest') {
      list.sort((a, b) => b.rating - a.rating);
    } else if (sort === 'lowest') {
      list.sort((a, b) => a.rating - b.rating);
    }

    return list;
  });

  // Обработчики событий
  onSearchInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);
  }

  setRatingFilter(rating: number | null) {
    this.selectedRating.set(rating);
  }

  onSortChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.sortBy.set(select.value as any);
  }

  toggleExpand(id: number) {
    const set = new Set(this.expandedIds());
    if (set.has(id)) {
      set.delete(id);
    } else {
      set.add(id);
    }
    this.expandedIds.set(set);
  }

  resetFilters() {
    this.searchQuery.set('');
    this.selectedRating.set(null);
    this.sortBy.set('newest');
  }

  openAddModal() {
    // Здесь ваша логика открытия модального окна добавления отзыва
  }
}
