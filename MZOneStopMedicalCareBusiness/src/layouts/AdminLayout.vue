<template>
  <div class="admin-layout">
    <aside class="sidebar">
      <div class="brand">
        <span class="brand-badge">C</span>
        <span class="brand-name">CareBridge<span class="brand-accent">China</span></span>
        <span class="brand-sub">Admin</span>
      </div>
      <nav class="nav">
        <RouterLink to="/leads" class="nav-link" active-class="active">
          <span class="dot" /> Leads
        </RouterLink>
      </nav>
      <div class="sidebar-footer">
        <div class="user">
          <div class="user-name">{{ auth.profile?.nickName || auth.profile?.account }}</div>
          <div class="user-role">{{ auth.profile?.roleType === 1 ? 'Administrator' : 'Member' }}</div>
        </div>
        <button class="btn btn-ghost logout" @click="onLogout">Log out</button>
      </div>
    </aside>
    <main class="content">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterLink, RouterView, useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const auth = useAuthStore();
const router = useRouter();

onMounted(() => {
  if (auth.memberToken && !auth.profile) {
    auth.refreshProfile().catch(() => auth.logout());
  }
});

async function onLogout() {
  await auth.logout();
  router.push({ name: 'login' });
}
</script>

<style scoped>
.admin-layout {
  display: grid;
  grid-template-columns: 232px 1fr;
  min-height: 100vh;
}

.sidebar {
  background: var(--medical-900);
  color: #fff;
  padding: 28px 22px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 18px;
}

.brand-badge {
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--primary-600), var(--secondary-600));
  border-radius: 8px;
  font-weight: 700;
}

.brand-accent {
  color: var(--primary-500);
}

.brand-sub {
  margin-left: auto;
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--gray-400);
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: var(--radius-md);
  color: var(--gray-300);
  font-weight: 500;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.06);
  color: #fff;
  text-decoration: none;
}

.nav-link.active {
  background: rgba(14, 165, 233, 0.16);
  color: var(--primary-500);
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
}

.sidebar-footer {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.user-name {
  font-weight: 600;
}
.user-role {
  font-size: 12px;
  color: var(--gray-400);
}

.logout {
  background: transparent;
  border-color: rgba(255, 255, 255, 0.18);
  color: #fff;
}

.logout:hover {
  border-color: var(--primary-500);
  color: var(--primary-500);
}

.content {
  padding: 32px 40px;
  overflow: auto;
}
</style>
