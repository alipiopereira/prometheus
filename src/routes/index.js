import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../views/App'
import Loading from '../views/Loading'

Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    routes: [
        {
            path: '*',
            redirect: '/'
          },
          {
            path: '/',
            name: 'loading',
            component: Loading
        },
        {
            path: '/app',
            name: 'app',
            component: App
        }
    ],
})

export default router