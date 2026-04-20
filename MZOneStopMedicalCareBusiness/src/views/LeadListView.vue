<template>
  <section class="page">
    <header class="head">
      <div>
        <h1 class="page-title">Leads</h1>
        <p class="sub">C 端提交的意向客户信息</p>
      </div>
      <div class="stats">
        <div class="stat">
          <div class="stat-value">{{ total }}</div>
          <div class="stat-label">Total Leads</div>
        </div>
      </div>
    </header>

    <div class="filters card">
      <input
        v-model="keyword"
        class="input"
        type="text"
        placeholder="Search by name, email, phone, country, message…"
        @keyup.enter="search(1)"
      />
      <select v-model="medicalInterest" class="select" @change="search(1)">
        <option value="">All medical interests</option>
        <option v-for="item in INTERESTS" :key="item" :value="item">{{ item }}</option>
      </select>
      <button class="btn btn-primary" @click="search(1)">Search</button>
      <button class="btn btn-ghost" @click="reset">Reset</button>
    </div>

    <div class="card table-card">
      <table class="table">
        <thead>
          <tr>
            <th>Submitted</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Country</th>
            <th>Interest</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="loading">
            <td colspan="8" class="empty">Loading…</td>
          </tr>
          <tr v-else-if="items.length === 0">
            <td colspan="8" class="empty">No leads yet.</td>
          </tr>
          <tr v-else v-for="row in items" :key="row.leadId">
            <td>{{ formatDateTime(row.createdAt) }}</td>
            <td>{{ row.fullName || '—' }}</td>
            <td>{{ row.email || '—' }}</td>
            <td>{{ row.phone || '—' }}</td>
            <td>{{ row.country || '—' }}</td>
            <td>{{ row.medicalInterest || '—' }}</td>
            <td>
              <span class="badge" :class="statusClass(row.status)">{{ leadStatusLabel(row.status) }}</span>
            </td>
            <td>
              <RouterLink class="link" :to="`/leads/${row.leadId}`">View</RouterLink>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="pager">
        <button class="btn btn-ghost" :disabled="page <= 1" @click="search(page - 1)">Prev</button>
        <span class="pager-info">Page {{ page }} / {{ totalPages }}</span>
        <button class="btn btn-ghost" :disabled="page >= totalPages" @click="search(page + 1)">Next</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { listLeads, type Lead } from '@/api/modules/lead';
import { formatDateTime, leadStatusLabel } from '@/utils/format';

const INTERESTS = [
  'Health Screening',
  'Dentistry',
  'Cosmetic Surgery',
  'Traditional Chinese Medicine',
  'CAR-T Cell Therapy',
  'Advanced Treatments'
];

const keyword = ref('');
const medicalInterest = ref('');
const page = ref(1);
const pageSize = ref(20);
const total = ref(0);
const items = ref<Lead[]>([]);
const loading = ref(false);

const totalPages = computed(() => Math.max(1, Math.ceil(total.value / pageSize.value)));

async function search(targetPage: number) {
  loading.value = true;
  try {
    const data = await listLeads({
      page: targetPage,
      pageSize: pageSize.value,
      keyword: keyword.value.trim() || undefined,
      medicalInterest: medicalInterest.value || undefined
    });
    items.value = data.items;
    total.value = data.total;
    page.value = data.page;
  } finally {
    loading.value = false;
  }
}

function reset() {
  keyword.value = '';
  medicalInterest.value = '';
  search(1);
}

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

onMounted(() => search(1));
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 20px;
  flex-wrap: wrap;
}

.page-title {
  margin: 0;
  font-size: 32px;
}

.sub {
  margin: 6px 0 0;
  color: var(--gray-500);
}

.stats {
  display: flex;
  gap: 14px;
}

.stat {
  background: #fff;
  border-radius: var(--radius-lg);
  padding: 14px 22px;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--gray-100);
}

.stat-value {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 24px;
  font-weight: 700;
  color: var(--primary-600);
}

.stat-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--gray-500);
}

.filters {
  display: grid;
  grid-template-columns: 1fr 240px auto auto;
  gap: 12px;
  padding: 16px;
  align-items: center;
}

.table-card {
  padding: 8px 0 0;
  overflow: hidden;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 12px 18px;
  text-align: left;
  vertical-align: middle;
  border-bottom: 1px solid var(--gray-100);
  font-size: 13.5px;
}

.table th {
  background: var(--gray-50);
  color: var(--gray-500);
  font-weight: 600;
  text-transform: uppercase;
  font-size: 11px;
  letter-spacing: 0.08em;
}

.table tr:last-child td {
  border-bottom: none;
}

.badge {
  display: inline-block;
  padding: 3px 10px;
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

.link {
  color: var(--primary-600);
  font-weight: 600;
}

.empty {
  text-align: center;
  padding: 36px 0;
  color: var(--gray-400);
}

.pager {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 12px 18px;
  border-top: 1px solid var(--gray-100);
}

.pager-info {
  color: var(--gray-500);
  font-size: 13px;
}
</style>
