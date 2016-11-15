import Vue from 'vue';
import Router from 'vue-router';

import PageCitySelect from '../views/PageCitySelect';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/city-select',
      component: PageCitySelect,
      name: 'city-select'
    },

    { path: '*', redirect: '/city-select' },
  ],
});
