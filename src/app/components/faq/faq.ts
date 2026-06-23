import {Component, signal} from '@angular/core';
import {FaqItem} from '../../interfaces/FaqItem';
import {FaqItems} from '../../mock/Faq';

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class Faq  {
  openIndex = signal<number | null>(0);
  faqList: FaqItem[] = FaqItems;

  toggleFaq(index: number) {
    this.openIndex.update(current => current === index ? null : index);
  }
}
