<template>
  <header class="fixed inset-x-0 top-0 z-40 glass-effect">
    <div class="container-page flex h-20 items-center justify-between">
      <RouterLink to="/" class="flex items-center gap-3">
        <span class="brand-badge">C</span>
        <span class="font-serif text-xl font-bold text-medical-900">
          {{ t('common.brandPrefix') }}<span class="text-primary-600">{{ t('common.brandSuffix') }}</span>
        </span>
      </RouterLink>

      <nav class="hidden lg:flex items-center gap-8 text-sm font-medium text-medical-700">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="nav-link"
          :class="{ 'text-primary-600': isActive(link.to) }"
        >
          {{ link.label }}
        </RouterLink>
        <div class="relative group">
          <button class="nav-link flex items-center gap-1">
            {{ t('header.services') }}
            <i class="fa-solid fa-chevron-down text-xs"></i>
          </button>
          <div
            class="absolute right-0 top-full w-64 bg-white shadow-xl rounded-2xl py-2 border border-medical-100 opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition"
          >
            <RouterLink
              v-for="svc in services"
              :key="svc"
              :to="{ path: '/about', hash: '#services' }"
              class="flex items-center gap-3 px-4 py-2 hover:bg-primary-50 hover:text-primary-700"
            >
              <i class="fa-solid fa-stethoscope text-primary-500 w-4"></i>
              <span>{{ svc }}</span>
            </RouterLink>
          </div>
        </div>
      </nav>

      <div class="flex items-center gap-3">
        <LangSwitch class="hidden md:inline-flex" />
        <RouterLink to="/#contact" class="hidden md:inline-flex btn-pill bg-primary-600 text-white px-5 py-2.5 text-sm hover:bg-primary-700">
          {{ t('common.contactUs') }}
        </RouterLink>

        <button class="lg:hidden text-medical-800" @click="mobileOpen = !mobileOpen" :aria-label="t('header.toggleMenu')">
          <i class="fa-solid" :class="mobileOpen ? 'fa-xmark' : 'fa-bars'"></i>
        </button>
      </div>
    </div>

    <div v-if="mobileOpen" class="lg:hidden border-t border-medical-100 bg-white">
      <div class="container-page py-3 flex flex-col gap-1">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="py-2 text-medical-700"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </RouterLink>
        <div class="mt-2 flex items-center gap-3">
          <LangSwitch />
          <RouterLink
            to="/#contact"
            class="btn-pill bg-primary-600 text-white py-2.5 px-5 text-sm w-max"
            @click="mobileOpen = false"
          >
            {{ t('common.contactUs') }}
          </RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useMessages } from '@/i18n';
import LangSwitch from '@/components/LangSwitch.vue';

const route = useRoute();
const mobileOpen = ref(false);
const { t } = useI18n();
const m = useMessages();

const links = computed(() => [
  { to: '/', label: t('header.nav.home') },
  { to: '/about', label: t('header.nav.about') },
  { to: '/why-china', label: t('header.nav.whyChina') },
  { to: '/explore-china', label: t('header.nav.exploreChina') },
  { to: '/medical-journey', label: t('header.nav.journey') }
]);

const services = computed(() => m.value.header.servicesMenu);

function isActive(to: string) {
  if (to === '/') return route.path === '/';
  return route.path.startsWith(to);
}
</script>

<style scoped>
.brand-badge {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 700;
  color: #fff;
  border-radius: 10px;
  background: linear-gradient(135deg, #0284c7, #7c3aed);
}

.nav-link {
  @apply hover:text-primary-600 transition;
}
</style>
