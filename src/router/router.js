import { createRouter, createWebHistory } from 'vue-router';
import Companies from '../components/companies/Companies.vue';
import CompaniesInfo from '../components/companies/CompaniesInfo.vue';

const routes = [
  {
    path: '/',
    name: 'Companies',
    component: Companies,
  },
  {
    path: '/info',
    name: 'CompaniesInfo',
    component: CompaniesInfo,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
