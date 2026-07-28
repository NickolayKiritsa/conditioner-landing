import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  currentYear = signal(new Date().getFullYear());

  onSubscribe(event: Event) {
    event.preventDefault();
    console.log('Подписка на акции оформлена');
  }
}
