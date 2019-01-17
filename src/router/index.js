import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Characters from '../views/Home/Characters'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            component: Home,
            name: 'Home',
            redirect: { name: 'Characters' },
            children: [
                { path: '/characters', component: Characters, name: 'Characters' }
            ]
        }
    ]
})

export default router
