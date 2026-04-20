<template>
  <div class="login-page">
    <div class="lang-slot">
      <LangSwitch />
    </div>
    <div class="panel card">
      <div class="brand">
        <span class="brand-badge">C</span>
        <span class="brand-text">
          {{ t('common.brandPrefix') }}<span class="accent">{{ t('common.brandSuffix') }}</span>
        </span>
      </div>
      <h1 class="page-title">{{ t('login.title') }}</h1>
      <p class="hint">{{ t('login.hint') }}</p>

      <form class="form" @submit.prevent="onSubmit">
        <label class="field">
          <span class="field-label">{{ t('login.account') }}</span>
          <input
            v-model="account"
            class="input"
            type="text"
            autocomplete="username"
            placeholder="root"
            required
          />
        </label>
        <label class="field">
          <span class="field-label">{{ t('login.password') }}</span>
          <input
            v-model="password"
            class="input"
            type="password"
            autocomplete="current-password"
            required
          />
        </label>

        <div v-if="error" class="error">{{ error }}</div>

        <button class="btn btn-primary submit" type="submit" :disabled="loading">
          {{ loading ? t('login.submitting') : t('login.submit') }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useAuthStore } from '@/stores/auth';
import { md5Hash } from '@/utils/md5';
import LangSwitch from '@/components/LangSwitch.vue';

const { t } = useI18n();

const account = ref('');
const password = ref('');
const loading = ref(false);
const error = ref('');

const auth = useAuthStore();
const route = useRoute();
const router = useRouter();

async function onSubmit() {
  error.value = '';
  loading.value = true;
  try {
    await auth.login(account.value.trim(), md5Hash(password.value));
    const redirect = (route.query.redirect as string) || '/leads';
    router.push(redirect);
  } catch (e) {
    const msg = (e as Error).message || t('login.defaultError');
    error.value = msg;
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
.login-page {
  position: relative;
  min-height: 100vh;
  background:
    radial-gradient(1200px 600px at 10% -10%, rgba(14, 165, 233, 0.18), transparent 60%),
    radial-gradient(900px 500px at 110% 110%, rgba(124, 58, 237, 0.18), transparent 60%),
    linear-gradient(135deg, #f0f9ff, #fff 50%, #f5f3ff);
  display: grid;
  place-items: center;
  padding: 40px 20px;
}

.lang-slot {
  position: absolute;
  top: 24px;
  right: 28px;
}

.panel {
  width: 100%;
  max-width: 420px;
  padding: 36px 36px 32px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 18px;
  margin-bottom: 24px;
}

.brand-badge {
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  color: #fff;
  background: linear-gradient(135deg, var(--primary-600), var(--secondary-600));
  border-radius: 8px;
  font-weight: 700;
}

.brand-text {
  color: var(--medical-900);
}

.accent {
  color: var(--primary-600);
}

.page-title {
  margin: 0 0 6px;
  font-size: 26px;
}

.hint {
  margin: 0 0 26px;
  color: var(--gray-500);
}

.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.field-label {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--gray-500);
}

.error {
  background: #fef2f2;
  color: #b91c1c;
  padding: 10px 12px;
  border-radius: var(--radius-md);
  font-size: 13px;
}

.submit {
  margin-top: 8px;
  padding: 12px 18px;
  font-size: 15px;
}
</style>
