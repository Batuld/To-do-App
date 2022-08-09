import { createRouter, createWebHashHistory } from 'vue-router';
import AddTask from '../components/AddTask.vue';
import Home from '../components/Home.vue';

const routes = [
        {
            path: '/',
            name: 'HomePage',
            component: Home,
        },
        {
            path: '/add_task',
            name: 'AddTask',
            component: AddTask,
        }
    ]
 
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router