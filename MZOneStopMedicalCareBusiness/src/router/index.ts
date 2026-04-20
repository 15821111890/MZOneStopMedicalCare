import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue'),
    meta: { public: true }
  },
  {
    path: '/',
    component: () => import('@/layouts/AdminLayout.vue'),
    redirect: '/leads',
    children: [
      {
        path: 'leads',
        name: 'leads',
        component: () => import('@/views/LeadListView.vue')
      },
      {
        path: 'leads/:leadId',
        name: 'lead-detail',
        component: () => import('@/views/LeadDetailView.vue'),
        props: true
      }
    ]
  },
  { path: '/:pathMatch(.*)*', redirect: '/leads' }
];

const router = createRouter({
  history: createWebHistory('/medicine-h5/management/'),
  routes
});

router.beforeEach((to) => {
  const auth = useAuthStore();
  if (to.meta.public) return true;
  if (!auth.memberToken) {
    return { name: 'login', query: { redirect: to.fullPath } };
  }
  return true;
});

export default router;
