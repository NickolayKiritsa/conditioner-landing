import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

interface TocItem {
  id: string;
  title: string;
}

@Component({
  selector: 'app-privacy-policy',
  imports: [
    RouterLink
  ],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy {
  readonly lastUpdated = '27 июля 2026';

  readonly tocList: TocItem[] = [
    { id: 'general', title: '1. Общи разпоредби' },
    { id: 'data-collection', title: '2. Какви лични данни събираме?' },
    { id: 'cookies', title: '3. Използване на "бисквитки" (Cookies)' },
    { id: 'data-usage', title: '4. За какви цели използваме Вашите данни?' },
    { id: 'data-sharing', title: '5. Споделяне на данни с трети страни' },
    { id: 'user-consent', title: '6. Права на потребителя' },
    { id: 'data-security', title: '7. Безопасност и съхранение на данните' },
    { id: 'user-rights', title: '8. Вашите права според GDPR' },
    { id: 'contacts', title: '9. Контакти' },
  ];

  scrollToSection(event: Event, id: string): void {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }
}
