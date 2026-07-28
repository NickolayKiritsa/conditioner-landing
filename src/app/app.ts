<<<<<<< HEAD
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Hero} from './components/hero/hero';
import {Features} from './components/features/features';
import {Header} from './components/header/header';
import {Footer} from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, Features, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('conditioner-landing');
}
=======
import {Component} from '@angular/core';
import {Header} from './components/header/header';
import {Footer} from './components/footer/footer';
import {RouterOutlet} from '@angular/router';
import {CookiesBanner} from './components/cookies-banner/cookies-banner';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, RouterOutlet, CookiesBanner],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
>>>>>>> 46d31c0e8b2ee33b524240789f79ca438e1ed673
