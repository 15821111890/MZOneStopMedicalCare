<template>
  <footer class="bg-medical-900 text-medical-300">
    <div class="container-page py-10 flex flex-col md:flex-row items-center justify-between gap-6">
      <div class="flex items-center gap-3">
        <span class="brand-badge">C</span>
        <span class="font-serif text-xl font-bold text-white">
          CareBridge<span class="text-primary-500">China</span>
        </span>
      </div>
      <p class="text-sm text-medical-400">© {{ year }} CareBridgeChina. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
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
</style>
