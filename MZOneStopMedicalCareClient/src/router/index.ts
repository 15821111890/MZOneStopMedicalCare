import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: () => import('@/views/HomeView.vue') },
  { path: '/about', name: 'about', component: () => import('@/views/AboutView.vue') },
  { path: '/why-china', name: 'why-china', component: () => import('@/views/WhyChinaView.vue') },
  { path: '/explore-china', name: 'explore-china', component: () => import('@/views/ExploreChinaView.vue') },
  { path: '/medical-journey', name: 'medical-journey', component: () => import('@/views/JourneyView.vue') },
  { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = createRouter({
  history: createWebHistory('/medicine-h5/client/'),
  routes,
  scrollBehavior(to, _from, saved) {
    if (saved) return saved;
    if (to.hash) return { el: to.hash, behavior: 'smooth', top: 80 };
    return { top: 0 };
  }
});

export default router;
