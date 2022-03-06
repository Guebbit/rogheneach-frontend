import Index from './index.vue'
import {i18n, availableLanguages, loadLanguageAsync} from '../plugins/i18n';
import * as assert from "assert";


export default [
  {
    path: '/',
    redirect: '/' + i18n.locale,
    name: 'home'
  },
  //language list
  {
    // domain/lang/
    path: '/:lang',
    component: {
      /**
       *  DIRTY HACK
       *  se non ho components veri e propri, renderizzo la router-view
       **/
      render(c: any) {
        return c('router-view')
      }
    },
    /**
     *  GUARD
     *  Controllo che la lingua scelta esista, se no default
     **/
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
