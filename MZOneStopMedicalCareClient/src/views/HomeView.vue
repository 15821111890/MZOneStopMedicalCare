<template>
  <!-- HERO -->
  <section class="hero-gradient text-white">
    <div class="container-page grid lg:grid-cols-2 gap-12 items-center pt-16 pb-24">
      <div>
        <span class="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur px-4 py-2 text-sm">
          <i class="fa-solid fa-hospital"></i>
          {{ t('home.heroBadge') }}
        </span>
        <h1 class="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          {{ t('home.heroTitle1') }}
          <span class="block text-primary-200">{{ t('home.heroTitle2') }}</span>
        </h1>
        <p class="mt-6 text-xl text-white/90 max-w-xl">
          {{ t('home.heroDesc') }}
        </p>
        <div class="mt-8 flex flex-wrap gap-4">
          <a href="#contact" class="btn-inverse">{{ t('home.heroCtaConsult') }}</a>
          <RouterLink to="/about" class="btn-inverse-outline">{{ t('home.heroCtaLearn') }}</RouterLink>
        </div>
      </div>
      <div class="relative">
        <img
          class="rounded-3xl shadow-2xl w-full h-[460px] object-cover"
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
          :alt="t('home.heroImageAlt')"
        />
        <div class="absolute -bottom-8 -left-8 bg-white text-medical-800 p-6 rounded-2xl shadow-xl w-56">
          <div class="text-3xl font-bold text-primary-600">{{ t('home.heroSavingsValue') }}</div>
          <div class="text-sm text-medical-500 mt-1">{{ t('home.heroSavingsLabel') }}</div>
        </div>
      </div>
    </div>
  </section>

  <!-- STATS -->
  <section class="bg-white">
    <div class="container-page py-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div v-for="(stat, i) in stats" :key="i">
        <div class="font-serif text-4xl font-bold" :class="statColors[i]">{{ stat.value }}</div>
        <div class="mt-2 text-sm uppercase tracking-wider text-medical-500">{{ stat.label }}</div>
      </div>
    </div>
  </section>

  <!-- SERVICES -->
  <section id="services" class="bg-gradient-to-br from-primary-50 via-white to-secondary-50">
    <div class="container-page section">
      <div class="max-w-3xl">
        <h2 class="section-title">{{ t('home.servicesTitle') }}</h2>
        <p class="section-sub">{{ t('home.servicesSub') }}</p>
      </div>

      <div class="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="(svc, i) in services"
          :key="i"
          class="bg-white rounded-3xl border border-medical-100 p-8 hover:shadow-xl transition"
        >
          <div
            class="w-14 h-14 rounded-2xl grid place-items-center text-2xl mb-5"
            :class="serviceStyles[i].iconClass"
          >
            <i :class="serviceStyles[i].icon"></i>
          </div>
          <h3 class="font-sans text-xl font-bold text-medical-900">{{ svc.title }}</h3>
          <p class="mt-3 text-medical-600">{{ svc.desc }}</p>
        </article>
      </div>
    </div>
  </section>

  <!-- JOURNEY PREVIEW -->
  <section class="bg-white">
    <div class="container-page section grid lg:grid-cols-2 gap-12 items-center">
      <img
        class="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
        src="https://images.unsplash.com/photo-1537531383496-f4749b8032cf?auto=format&fit=crop&w=1200&q=80"
        :alt="t('home.journeyImageAlt')"
      />
      <div>
        <span class="inline-flex items-center gap-2 rounded-full bg-primary-100 text-primary-700 px-4 py-1.5 text-sm font-medium">
          <i class="fa-solid fa-plane"></i> {{ t('home.journeyBadge') }}
        </span>
        <h2 class="mt-4 section-title">{{ t('home.journeyTitle') }}</h2>
        <p class="mt-4 text-xl text-medical-600">{{ t('home.journeyDesc') }}</p>
        <div class="mt-6 flex flex-wrap gap-3 text-sm">
          <span class="flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full">
            <i class="fa-solid fa-hospital"></i> {{ journeyTags[0] }}
          </span>
          <span class="flex items-center gap-2 bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full">
            <i class="fa-solid fa-hotel"></i> {{ journeyTags[1] }}
          </span>
          <span class="flex items-center gap-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full">
            <i class="fa-solid fa-map"></i> {{ journeyTags[2] }}
          </span>
        </div>
        <RouterLink to="/medical-journey" class="mt-8 inline-flex btn-pill bg-primary-600 text-white px-6 py-3 text-sm">
          {{ t('home.journeyCta') }}
          <i class="fa-solid fa-arrow-right ml-1"></i>
        </RouterLink>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section id="contact" class="relative overflow-hidden bg-gradient-to-br from-primary-900 via-secondary-900 to-accent-900 text-white">
    <div class="absolute inset-0 dot-pattern opacity-30"></div>
    <div class="container-page section grid lg:grid-cols-2 gap-14 relative">
      <div>
        <h2 class="section-title text-white">{{ t('home.contactTitle') }}</h2>
        <p class="mt-4 text-xl text-white/80 max-w-lg">{{ t('home.contactDesc') }}</p>
        <div class="mt-10 space-y-6 text-white/90">
          <div class="flex gap-4 items-start">
            <span class="w-12 h-12 grid place-items-center rounded-xl bg-white/15">
              <i class="fa-solid fa-envelope text-xl"></i>
            </span>
            <div>
              <div class="text-sm text-white/60 uppercase tracking-wider">{{ t('home.contactEmailLabel') }}</div>
              <div class="text-lg font-semibold">{{ t('home.contactEmailValue') }}</div>
            </div>
          </div>
          <div class="flex gap-4 items-start">
            <span class="w-12 h-12 grid place-items-center rounded-xl bg-white/15">
              <i class="fa-brands fa-whatsapp text-xl"></i>
            </span>
            <div>
              <div class="text-sm text-white/60 uppercase tracking-wider">{{ t('home.contactWhatsAppLabel') }}</div>
              <div class="text-lg font-semibold">{{ t('home.contactWhatsAppValue') }}</div>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useMessages } from '@/i18n';
import ContactForm from '@/components/ContactForm.vue';

const { t } = useI18n();
const m = useMessages();

const stats = computed(() => m.value.home.stats);
const statColors = ['text-primary-600', 'text-secondary-600', 'text-accent-600', 'text-primary-600'];

const services = computed(() => m.value.home.services);

const serviceStyles = [
  { icon: 'fa-solid fa-stethoscope', iconClass: 'bg-primary-100 text-primary-600' },
  { icon: 'fa-solid fa-tooth', iconClass: 'bg-secondary-100 text-secondary-600' },
  { icon: 'fa-solid fa-user-md', iconClass: 'bg-accent-100 text-accent-600' },
  { icon: 'fa-solid fa-yin-yang', iconClass: 'bg-emerald-100 text-emerald-600' },
  { icon: 'fa-solid fa-dna', iconClass: 'bg-rose-100 text-rose-600' },
  { icon: 'fa-solid fa-heart-pulse', iconClass: 'bg-indigo-100 text-indigo-600' }
];

const journeyTags = computed(() => m.value.home.journeyTags);
</script>
