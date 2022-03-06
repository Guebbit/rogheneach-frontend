import {i18n, availableLanguages, loadLanguageAsync} from '../plugins/i18n';

export default function ({ store, redirect }) {
	console.log("LANGUAGE MIDDLEWARE", availableLanguages);
	// return redirect('/login')
}


/*

import Index from './index.vue'
import {i18n, availableLanguages, loadLanguageAsync} from '../plugins/i18n';
import * as assert from "assert";

export default [
  {
    path: '/',
    redirect: '/' + i18n.locale,
    name: 'home'
  },
  {
    path: '/about',
    redirect: '/' + i18n.locale,
    name: 'about'
  },
  //language list
  {
    // domain/lang/
    path: '/:lang',
    // GUARD - Controllo che la lingua scelta esista, se no default
    beforeEnter: (to: any, from: any, next: any) => {
      if (!availableLanguages.includes(to.params.lang))
        next({name: 'home'});
      //loado la lingua richiesta
      loadLanguageAsync(to.params.lang);
      next();
    },
    children: [
      {
        name: 'index',
        path: '',
        component: Index
      }
    ]
  }
];


 */
