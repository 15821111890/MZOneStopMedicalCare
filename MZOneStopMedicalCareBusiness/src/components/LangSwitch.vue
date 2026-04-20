<template>
  <div class="lang-switch" :class="{ 'lang-switch--dark': dark }">
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

defineProps<{ dark?: boolean }>();

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
  background: #fff;
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

.lang-btn:hover,
.lang-btn.active {
  color: var(--primary-600);
  font-weight: 600;
}

.lang-sep {
  color: #94a3b8;
}

.lang-switch--dark {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.88);
}

.lang-switch--dark .lang-btn:hover,
.lang-switch--dark .lang-btn.active {
  color: #fff;
  background: rgba(255, 255, 255, 0.18);
}

.lang-switch--dark .lang-sep {
  color: rgba(255, 255, 255, 0.5);
}
</style>
