import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Hero} from './components/hero/hero';
import {Features} from './components/features/features';
import {Header} from './components/header/header';
import {Footer} from './components/footer/footer';
import {Faq} from './components/faq/faq';
import {Compare} from './components/compare/compare';
import {Promo} from './components/promo/promo';

@Component({
  selector: 'app-root',
  imports: [Hero, Features, Header, Footer, Faq, Compare, Promo],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('conditioner-landing');
}
