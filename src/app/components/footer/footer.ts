import {Component, signal} from '@angular/core';
<<<<<<< HEAD

@Component({
  selector: 'app-footer',
  imports: [],
=======
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [
    RouterLink
  ],
>>>>>>> 46d31c0e8b2ee33b524240789f79ca438e1ed673
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
