import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Drag from '@/components/drag.vue'
import Interact from '@/components/interact.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/drag',
      name: 'Drag',
      component: Drag
    },
    {
      path: '/interact',
      name: 'Interact',
      component: Interact
    }
  ]
})
