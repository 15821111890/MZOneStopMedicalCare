<template>
  <form class="bg-white rounded-3xl p-8 shadow-2xl" @submit.prevent="onSubmit">
    <h3 class="font-serif text-2xl font-bold text-medical-800">{{ t('contact.title') }}</h3>
    <p class="mt-1 text-sm text-medical-500">{{ t('contact.subtitle') }}</p>

    <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      <label class="field">
        <span>{{ t('contact.firstName') }}</span>
        <input v-model="form.firstName" type="text" required :placeholder="t('contact.firstNamePlaceholder')" />
      </label>
      <label class="field">
        <span>{{ t('contact.lastName') }}</span>
        <input v-model="form.lastName" type="text" required :placeholder="t('contact.lastNamePlaceholder')" />
      </label>
      <label class="field md:col-span-2">
        <span>{{ t('contact.email') }}</span>
        <input v-model="form.email" type="email" required :placeholder="t('contact.emailPlaceholder')" />
      </label>
      <label class="field md:col-span-2">
        <span>{{ t('contact.phone') }}</span>
        <input v-model="form.phone" type="tel" required :placeholder="t('contact.phonePlaceholder')" />
      </label>
      <label class="field md:col-span-2">
        <span>{{ t('contact.country') }}</span>
        <input v-model="form.country" type="text" :placeholder="t('contact.countryPlaceholder')" />
      </label>
      <label class="field md:col-span-2">
        <span>{{ t('contact.medicalInterest') }}</span>
        <select v-model="form.medicalInterest">
          <option value="">{{ t('contact.medicalInterestPlaceholder') }}</option>
          <option v-for="item in INTERESTS" :key="item.value" :value="item.value">{{ item.label }}</option>
        </select>
      </label>
      <label class="field md:col-span-2">
        <span>{{ t('contact.message') }}</span>
        <textarea
          v-model="form.message"
          rows="3"
          :placeholder="t('contact.messagePlaceholder')"
        ></textarea>
      </label>
    </div>

    <button
      class="mt-6 w-full btn-pill bg-primary-600 text-white py-4 text-base hover:bg-primary-700 disabled:bg-medical-300 disabled:cursor-not-allowed"
      type="submit"
      :disabled="submitting || submitted"
    >
      <span v-if="submitted"><i class="fa-solid fa-check mr-2"></i>{{ t('contact.submitted') }}</span>
      <span v-else-if="submitting">{{ t('contact.submitting') }}</span>
      <span v-else>{{ t('contact.submit') }}</span>
    </button>

    <p v-if="error" class="mt-3 text-sm text-rose-600">{{ error }}</p>
    <p v-else-if="submitted" class="mt-3 text-sm text-emerald-600">
      {{ t('contact.success') }}
    </p>
    <p v-else class="mt-3 text-xs text-medical-400">
      {{ t('contact.disclaimer') }}
    </p>
  </form>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { submitLead } from '@/api/modules/lead';

const { t } = useI18n();

const INTERESTS = computed(() => [
  { value: 'Health Screening', label: t('services.healthScreening') },
  { value: 'Dentistry', label: t('services.dentistry') },
  { value: 'Cosmetic Surgery', label: t('services.cosmetic') },
  { value: 'Traditional Chinese Medicine', label: t('services.tcm') },
  { value: 'CAR-T Cell Therapy', label: t('services.carT') },
  { value: 'Advanced Treatments', label: t('services.advanced') }
]);

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  country: '',
  medicalInterest: '',
  message: ''
});

const submitting = ref(false);
const submitted = ref(false);
const error = ref('');

async function onSubmit() {
  submitting.value = true;
  error.value = '';
  try {
    await submitLead({ ...form });
    submitted.value = true;
  } catch (e) {
    error.value = (e as Error).message || t('contact.genericError');
  } finally {
    submitting.value = false;
  }
}
</script>

<style scoped>
.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.field > span {
  font-size: 12px;
  font-weight: 600;
  color: #475569;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.field input,
.field select,
.field textarea {
  width: 100%;
  border-radius: 12px;
  border: 1px solid #cbd5e1;
  padding: 10px 14px;
  font-size: 14px;
  color: #1e293b;
  background: #fff;
  outline: none;
  transition: border-color 0.15s, box-shadow 0.15s;
}

.field input:focus,
.field select:focus,
.field textarea:focus {
  border-color: #0284c7;
  box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.15);
}
</style>
