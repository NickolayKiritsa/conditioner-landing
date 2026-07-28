import { Routes } from '@angular/router';
import {Promo} from './components/promo/promo';
import {ReviewsList} from './components/reviews-list/reviews-list';
import {PrivacyPolicy} from './components/privacy-policy/privacy-policy';


export const routes: Routes = [
  {
    path:'',
    component: Promo
  },
  {
    path:'reviews',
    component: ReviewsList
  },
  {
    path: 'privacy',
    component: PrivacyPolicy,
  }
];
