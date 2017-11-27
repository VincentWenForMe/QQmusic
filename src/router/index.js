import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue';
import Recommend from '../components/Recommend.vue';
import MV from '../components/MV.vue';
import Sorting from '../components/Sorting.vue';
import FM from '../components/FM.vue';
import Detail from '../components/Detail.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/',
          name: 'Recommend',
          component: Recommend
        },
        {
          path: '/Recommend',
          component: Recommend
        },
        {
          path: '/MV',
          name: 'MV',
          component: MV
        },
        {
          path: '/Sorting',
          name: 'Sorting',
          component: Sorting
        },
        {
          path: '/FM',
          name: 'FM',
          component: FM
        }
      ]
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
