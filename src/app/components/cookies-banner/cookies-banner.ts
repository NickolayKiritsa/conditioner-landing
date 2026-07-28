import {Component, OnInit, signal} from '@angular/core';

@Component({
  selector: 'app-cookies-banner',
  imports: [],
  templateUrl: './cookies-banner.html',
  styleUrl: './cookies-banner.scss',
})
export class CookiesBanner implements OnInit {
  private readonly STORAGE_KEY = 'cookie_consent_accepted';

  // Управляем видимостью баннера через Signal
  isVisible = signal<boolean>(false);

  ngOnInit(): void {
    const isAccepted = localStorage.getItem(this.STORAGE_KEY);
    if (!isAccepted) {
      this.isVisible.set(true);
    }
  }

  acceptCookies(): void {
    localStorage.setItem(this.STORAGE_KEY, 'true');
    this.isVisible.set(false);
  }
}
