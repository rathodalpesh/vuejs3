import {createWebHistory,createRouter} from 'vue-router'
import Created from './components/Created.vue';
import Mounted from './components/Mounted.vue';
import Updated from './components/Updated.vue';
import Unmounted from './components/Unmounted.vue';
import PageNotFound from './components/PageNotFound.vue';

const routes = [
    {
        name: 'Created',
        path: '/created',
        component: Created
    },
    {
        name: 'Mounted',
        path: '/mounted/:name',
        component: Mounted
    },
    {
        name: 'Updated',
        path: '/updated',
        component: Updated
    },
    {
        name: 'Unmounted',
        path: '/unmounted',
        component: Unmounted
    },
    {
        name: 'PageNotFound',
        path: '/:pathMatch(.*)*',
        component: PageNotFound
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;