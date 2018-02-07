import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello.vue'
import Grid from '../page/grid/Grid.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/grid',
      name: 'grid',
      component: Grid
    }

  ]
})
