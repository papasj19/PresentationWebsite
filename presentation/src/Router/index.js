
import Home from "../Views/Home.vue";

import {createRouter, createWebHistory} from 'vue-router'
import Work from "../Views/Work.vue";
import School from "../Views/School.vue";


const routes = [

    {
        path: '/Work',
        name: 'Work',
        component: Work
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/School',
        name: 'School',
        component: School
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router