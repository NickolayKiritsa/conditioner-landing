import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isMenuOpen = signal(false);
<<<<<<< HEAD
  phoneNumber = signal('+7 (800) 555-35-35');
=======
>>>>>>> 46d31c0e8b2ee33b524240789f79ca438e1ed673

  toggleMenu() {
    this.isMenuOpen.update(value => !value);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
