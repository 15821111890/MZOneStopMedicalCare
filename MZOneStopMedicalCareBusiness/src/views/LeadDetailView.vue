<template>
  <section class="page">
    <header class="head">
      <RouterLink to="/leads" class="back">{{ t('leadDetail.back') }}</RouterLink>
      <h1 class="page-title">{{ t('leadDetail.title') }}</h1>
    </header>

    <div v-if="loading" class="card empty">{{ t('common.loading') }}</div>
    <div v-else-if="!lead" class="card empty">{{ t('leadDetail.notFound') }}</div>
    <div v-else class="grid">
      <section class="card profile">
        <div class="avatar">{{ initials }}</div>
        <div class="name">{{ lead.fullName || t('leadDetail.noName') }}</div>
        <div class="meta">{{ t('leadDetail.submittedAt', { time: formatDateTime(lead.createdAt) }) }}</div>
        <span class="badge" :class="statusClass(lead.status)">
          {{ t(leadStatusI18nKey(lead.status)) }}
        </span>
        <div class="actions">
          <button class="btn btn-primary" :disabled="saving || lead.status === 1" @click="setStatus(1)">
            {{ t('leadDetail.markContacted') }}
          </button>
          <button class="btn btn-ghost" :disabled="saving || lead.status === 2" @click="setStatus(2)">
            {{ t('leadDetail.close') }}
          </button>
          <button class="btn btn-ghost" :disabled="saving || lead.status === 0" @click="setStatus(0)">
            {{ t('leadDetail.reopen') }}
          </button>
        </div>
      </section>

      <section class="card info">
        <h2 class="section-title">{{ t('leadDetail.contactSection') }}</h2>
        <dl class="dl">
          <div><dt>{{ t('leadDetail.email') }}</dt><dd>{{ lead.email || t('common.dash') }}</dd></div>
          <div><dt>{{ t('leadDetail.phone') }}</dt><dd>{{ lead.phone || t('common.dash') }}</dd></div>
          <div><dt>{{ t('leadDetail.country') }}</dt><dd>{{ lead.country || t('common.dash') }}</dd></div>
          <div><dt>{{ t('leadDetail.interest') }}</dt><dd>{{ lead.medicalInterest ? t(interestI18nKey(lead.medicalInterest)) : t('common.dash') }}</dd></div>
          <div><dt>{{ t('leadDetail.source') }}</dt><dd>{{ lead.source || t('common.dash') }}</dd></div>
        </dl>

        <h2 class="section-title">{{ t('leadDetail.messageSection') }}</h2>
        <p class="message">{{ lead.message || t('leadDetail.noMessage') }}</p>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { getLead, updateLead, type Lead } from '@/api/modules/lead';
import { formatDateTime, interestI18nKey, leadStatusI18nKey } from '@/utils/format';

const { t } = useI18n();

const route = useRoute();
const lead = ref<Lead | null>(null);
const loading = ref(false);
const saving = ref(false);

const initials = computed(() => {
  const source = lead.value?.fullName || lead.value?.email || '?';
  return source
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p.charAt(0).toUpperCase())
    .join('');
});

function statusClass(status: number) {
  switch (status) {
    case 1:
      return 'badge-contacted';
    case 2:
      return 'badge-closed';
    default:
      return 'badge-new';
  }
}

async function load() {
  loading.value = true;
  try {
    lead.value = await getLead(route.params.leadId as string);
  } finally {
    loading.value = false;
  }
}

async function setStatus(status: number) {
  if (!lead.value) return;
  saving.value = true;
  try {
    lead.value = await updateLead(lead.value.leadId, { status });
  } finally {
    saving.value = false;
  }
}

onMounted(load);
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.head {
  display: flex;
  align-items: baseline;
  gap: 16px;
  flex-wrap: wrap;
}

.back {
  font-size: 13px;
  color: var(--gray-500);
}

.page-title {
  margin: 0;
  font-size: 28px;
}

.grid {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 20px;
}

.profile {
  padding: 26px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
}

.avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-600), var(--secondary-600));
  color: #fff;
  display: grid;
  place-items: center;
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 700;
  font-size: 24px;
}

.name {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 22px;
  font-weight: 700;
  color: var(--medical-900);
}

.meta {
  color: var(--gray-500);
  font-size: 13px;
}

.badge {
  padding: 3px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
}

.badge-new {
  background: var(--primary-100);
  color: var(--primary-700);
}
.badge-contacted {
  background: #fef3c7;
  color: #b45309;
}
.badge-closed {
  background: #e2e8f0;
  color: var(--gray-600);
}

.actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 10px;
}

.info {
  padding: 28px;
}

.section-title {
  font-family: 'Playfair Display', Georgia, serif;
  color: var(--medical-900);
  margin: 0 0 10px;
  font-size: 18px;
}

.section-title + .section-title {
  margin-top: 26px;
}

.dl {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px 24px;
  margin: 0 0 8px;
}

.dl dt {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--gray-500);
  margin-bottom: 2px;
}

.dl dd {
  margin: 0;
  color: var(--gray-800);
  font-weight: 500;
}

.message {
  background: var(--gray-50);
  border: 1px solid var(--gray-100);
  border-radius: var(--radius-md);
  padding: 14px 16px;
  margin: 0;
  white-space: pre-wrap;
  color: var(--gray-700);
}

.empty {
  padding: 60px 0;
  text-align: center;
  color: var(--gray-400);
}
</style>
