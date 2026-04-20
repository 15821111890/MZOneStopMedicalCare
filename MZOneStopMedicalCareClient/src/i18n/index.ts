import { computed, type ComputedRef } from 'vue';
import { createI18n, useI18n } from 'vue-i18n';
import en from './locales/en';
import zh from './locales/zh';

export type Locale = 'en' | 'zh';

const STORAGE_KEY = 'medicine-client-lang';
const raw = { en, zh };

function detectLocale(): Locale {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'en' || saved === 'zh') return saved;
  const browser = (navigator.language || 'en').toLowerCase();
  return browser.startsWith('zh') ? 'zh' : 'en';
}

const i18n = createI18n({
  legacy: false,
  locale: detectLocale(),
  fallbackLocale: 'en',
  messages: { en, zh }
});

export function setLocale(locale: Locale) {
  i18n.global.locale.value = locale;
  localStorage.setItem(STORAGE_KEY, locale);
  document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en';
}

setLocale(i18n.global.locale.value as Locale);

/**
 * Reactively return the full raw locale object for the current language.
 * Use this in views that need structured data (arrays of objects, nested text)
 * instead of `tm`/`rt` — vue-i18n 9.13's `rt` only accepts MessageFunctions,
 * so calling it on plain strings throws.
 */
export function useMessages(): ComputedRef<typeof en> {
  const { locale } = useI18n();
  return computed(() => raw[locale.value as Locale]);
}

export default i18n;
