<template>
  <SiteHeader />
  <main class="pt-20">
    <RouterView />
  </main>
  <SiteFooter />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import SiteHeader from '@/components/SiteHeader.vue';
import SiteFooter from '@/components/SiteFooter.vue';
</script>
