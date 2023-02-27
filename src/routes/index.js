import { createRouter,createWebHistory } from 'vue-router';

// import Home from '../views/Home.vue';
// import About from '../views/About.vue';
// import Movies from '../views/Movies.vue';

const Home =() => import('../views/Home.vue');


const routes = [
    {path : '/', component: Home},
    {path : '/oderbook', component: () => import('../views/oderbook.vue')},
    {path : '/cart', component: () => import('../views/cart.vue')},
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;