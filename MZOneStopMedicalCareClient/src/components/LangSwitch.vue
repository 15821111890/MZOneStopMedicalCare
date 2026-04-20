<template>
  <div class="lang-switch" :class="{ 'lang-switch--inverse': inverse }">
    <button
      type="button"
      class="lang-btn"
      :class="{ active: locale === 'en' }"
      @click="change('en')"
    >
      EN
    </button>
    <span class="lang-sep">/</span>
    <button
      type="button"
      class="lang-btn"
      :class="{ active: locale === 'zh' }"
      @click="change('zh')"
    >
      中文
    </button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { setLocale, type Locale } from '@/i18n';

defineProps<{ inverse?: boolean }>();

const { locale } = useI18n();

function change(next: Locale) {
  if (locale.value === next) return;
  setLocale(next);
}
</script>

<style scoped>
.lang-switch {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid rgba(15, 23, 42, 0.12);
  background: rgba(255, 255, 255, 0.6);
  font-size: 13px;
  color: #334155;
  user-select: none;
}

.lang-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 2px 6px;
  color: inherit;
  font-weight: 500;
  border-radius: 999px;
  transition: color 0.15s, background 0.15s;
}

.lang-btn:hover {
  color: #0284c7;
}

.lang-btn.active {
  color: #0284c7;
  font-weight: 700;
}

.lang-sep {
  color: #94a3b8;
}

.lang-switch--inverse {
  background: rgba(255, 255, 255, 0.14);
  border-color: rgba(255, 255, 255, 0.25);
  color: rgba(255, 255, 255, 0.9);
}

.lang-switch--inverse .lang-btn:hover,
.lang-switch--inverse .lang-btn.active {
  color: #fff;
  background: rgba(255, 255, 255, 0.18);
}

.lang-switch--inverse .lang-sep {
  color: rgba(255, 255, 255, 0.5);
}
</style>
