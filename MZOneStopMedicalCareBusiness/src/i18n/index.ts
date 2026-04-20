import { createI18n } from 'vue-i18n';
import en from './locales/en';
import zh from './locales/zh';

export type Locale = 'en' | 'zh';

const STORAGE_KEY = 'medicine-business-lang';

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

export default i18n;
