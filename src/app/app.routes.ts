import { Routes } from '@angular/router';
<<<<<<< HEAD

export const routes: Routes = [];
=======
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
>>>>>>> 46d31c0e8b2ee33b524240789f79ca438e1ed673
