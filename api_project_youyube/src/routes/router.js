import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import Favorites from '@/components/Favorites.vue';
import PokemonDetails from '@/components/PokemonDetails.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites,
  },
  {
    path: '/pokemon/:id',  
    name: 'PokemonDetails',
    component: PokemonDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
