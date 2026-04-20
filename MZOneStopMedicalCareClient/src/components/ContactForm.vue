<template>
  <form class="bg-white rounded-3xl p-8 shadow-2xl" @submit.prevent="onSubmit">
    <h3 class="font-serif text-2xl font-bold text-medical-800">Get a Free Consultation</h3>
    <p class="mt-1 text-sm text-medical-500">
      Share a few details and our care team will reach out within 24 hours.
    </p>

    <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      <label class="field">
        <span>First Name</span>
        <input v-model="form.firstName" type="text" required placeholder="John" />
      </label>
      <label class="field">
        <span>Last Name</span>
        <input v-model="form.lastName" type="text" required placeholder="Doe" />
      </label>
      <label class="field md:col-span-2">
        <span>Email Address</span>
        <input v-model="form.email" type="email" required placeholder="you@example.com" />
      </label>
      <label class="field md:col-span-2">
        <span>Phone Number</span>
        <input v-model="form.phone" type="tel" required placeholder="+1 (555) 000-0000" />
      </label>
      <label class="field md:col-span-2">
        <span>Country</span>
        <input v-model="form.country" type="text" placeholder="United States" />
      </label>
      <label class="field md:col-span-2">
        <span>Medical Interest</span>
        <select v-model="form.medicalInterest">
          <option value="">Select a service</option>
          <option v-for="item in INTERESTS" :key="item" :value="item">{{ item }}</option>
        </select>
      </label>
      <label class="field md:col-span-2">
        <span>Tell us about your medical needs</span>
        <textarea
          v-model="form.message"
          rows="3"
          placeholder="Briefly describe your situation, timeline, and any questions."
        ></textarea>
      </label>
    </div>

    <button
      class="mt-6 w-full btn-pill bg-primary-600 text-white py-4 text-base hover:bg-primary-700 disabled:bg-medical-300 disabled:cursor-not-allowed"
      type="submit"
      :disabled="submitting || submitted"
    >
      <span v-if="submitted"><i class="fa-solid fa-check mr-2"></i>Request received</span>
      <span v-else-if="submitting">Sending…</span>
      <span v-else>Request Free Consultation</span>
    </button>

    <p v-if="error" class="mt-3 text-sm text-rose-600">{{ error }}</p>
    <p v-else-if="submitted" class="mt-3 text-sm text-emerald-600">
      Thanks! We'll be in touch within 24 hours.
    </p>
    <p v-else class="mt-3 text-xs text-medical-400">
      By submitting, you agree to be contacted by CareBridgeChina. We don't share your data.
    </p>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { submitLead } from '@/api/modules/lead';

const INTERESTS = [
  'Health Screening',
  'Dentistry',
  'Cosmetic Surgery',
  'Traditional Chinese Medicine',
  'CAR-T Cell Therapy',
  'Advanced Treatments'
];

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
    error.value = (e as Error).message || 'Something went wrong, please try again.';
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
