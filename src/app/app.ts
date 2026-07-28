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
