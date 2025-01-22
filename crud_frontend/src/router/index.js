import { createRouter, createWebHistory } from 'vue-router';
import CrudApp from '../components/CrudApp.vue';
import FilteredItems from '../components/FilteredItems.vue'; // Create this new component

const routes = [
  {
    path: '/',
    name: 'Home',
    component: CrudApp,
  },
  {
    path: '/filtered-items',
    name: 'FilteredItems',
    component: FilteredItems,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
