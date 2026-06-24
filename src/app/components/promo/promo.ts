import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {PurchaseButton} from '../purchase-button/purchase-button';

@Component({
  selector: 'app-promo',
  imports: [
    NgForOf,
    PurchaseButton
  ],
  templateUrl: './promo.html',
  styleUrl: './promo.scss',
})
export class Promo {
  faqItems: any[] = [
    {
      question: 'Колко охлажда наистина Arctic Air?',
      answer: 'Понижава температурата с няколко градуса в зоната около уреда. Не охлажда цяла стая като стационарен климатик с фреон. Действа добре в радиус от един-два метра, затова е подходящ за бюро, нощно шкафче или малко помещение.',
      isOpen: false
    },
    {
      question: 'Трябва ли да слагам лед в резервоара?',
      answer: 'Не е задължително. Чиста студена вода е достатъчна за нормална работа на Arctic Air. Лед или охладени бутилки в резервоара дават по-осезаем ефект през горещите часове на деня.',
      isOpen: false
    },
    {
      question: 'Колко често се пълни резервоарът?',
      answer: 'При висока скорост резервоарът се изпразва по-бързо, а при ниска скорост издържа близо осем часа. През нощта на ниска скорост едно пълнене обикновено стига до сутринта.',
      isOpen: false
    },
    {
      question: 'Може ли да се ползва без вода, само като вентилатор?',
      answer: 'Да. Изключвате функцията за овлажняване и Arctic Air работи като обикновен тих вентилатор с три скорости. Удобно е, когато искате само въздушен поток.',
      isOpen: false
    },
    {
      question: 'Безопасен ли е за деца и хора с алергии?',
      answer: 'Уредът работи без фреон и без химически компоненти, а филтърът пречиства въздуха при преминаването му през водата. Това го делает подходящ за детска стая.',
      isOpen: false
    }
  ];

  toggleFaq(index: number): void {
    this.faqItems[index].isOpen = !this.faqItems[index].isOpen;
  }

  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  onSubmitOrder(event: Event): void {
    event.preventDefault();
    console.log('Данные формы отправлены в CRM');
    alert('Благодарим Ви за поръчката! Ще Ви се обадим в най-кратък срок.');
  }
}
