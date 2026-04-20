<template>
  <!-- HERO -->
  <section class="bg-gradient-to-br from-primary-50 via-white to-secondary-50">
    <div class="container-page grid lg:grid-cols-2 gap-12 items-center pt-16 pb-24">
      <div>
        <span class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 px-4 py-2 text-sm font-medium">
          <i class="fa-solid fa-plane"></i> {{ t('journey.heroBadge') }}
        </span>
        <h1 class="mt-5 font-serif text-5xl md:text-6xl font-bold leading-tight text-medical-900">
          {{ t('journey.heroTitle1') }} <span class="gradient-text">{{ t('journey.heroTitle2') }}</span>
        </h1>
        <p class="mt-5 text-xl text-medical-600 max-w-xl">{{ t('journey.heroDesc') }}</p>
        <div class="mt-8 flex flex-wrap gap-4">
          <a href="#itinerary" class="btn-primary">{{ t('journey.heroCtaView') }}</a>
          <RouterLink to="/#contact" class="btn-outline">{{ t('journey.heroCtaPlan') }}</RouterLink>
        </div>
      </div>
      <div class="relative">
        <img
          class="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
          src="https://images.unsplash.com/photo-1537531383496-f4749b8032cf?auto=format&fit=crop&w=1200&q=80"
          alt="Shanghai skyline"
        />
        <div class="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 w-64">
          <div class="font-serif text-xl font-bold text-primary-600">{{ t('journey.heroStatValue') }}</div>
          <div class="text-sm text-medical-500 mt-1">{{ t('journey.heroStatLabel') }}</div>
        </div>
      </div>
    </div>
  </section>

  <!-- WHAT MAKES US DIFFERENT -->
  <section class="bg-white">
    <div class="container-page section">
      <div class="max-w-3xl">
        <h2 class="section-title">{{ t('journey.specialTitle') }}</h2>
        <p class="section-sub">{{ t('journey.specialSub') }}</p>
      </div>
      <div class="mt-14 grid md:grid-cols-3 gap-6">
        <article
          v-for="(card, i) in specialCards"
          :key="i"
          class="rounded-3xl p-8 text-center"
          :class="specialStyles[i].cardClass"
        >
          <div class="mx-auto w-16 h-16 rounded-full grid place-items-center text-2xl" :class="specialStyles[i].iconClass">
            <i :class="specialStyles[i].icon"></i>
          </div>
          <h3 class="mt-4 font-sans text-xl font-bold text-medical-900">{{ card.title }}</h3>
          <p class="mt-2 text-medical-600">{{ card.desc }}</p>
        </article>
      </div>
    </div>
  </section>

  <!-- ITINERARY TIMELINE -->
  <section id="itinerary" class="bg-medical-50">
    <div class="container-page section">
      <div class="max-w-3xl">
        <h2 class="section-title">{{ t('journey.itineraryTitle') }}</h2>
        <p class="section-sub">{{ t('journey.itinerarySub') }}</p>
      </div>

      <ol class="mt-14 relative max-w-4xl mx-auto">
        <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500 rounded-full"></div>

        <li
          v-for="(day, i) in days"
          :key="i"
          class="relative md:grid md:grid-cols-2 md:gap-12 py-6"
          :class="i % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:col-start-2'"
        >
          <div
            class="hidden md:grid absolute left-1/2 top-8 w-12 h-12 -translate-x-1/2 place-items-center rounded-full text-white font-bold shadow-lg"
            :class="dayDotClasses[i]"
          >
            {{ day.marker }}
          </div>

          <div class="md:col-start-1" :class="i % 2 === 1 ? 'md:col-start-2' : ''">
            <article class="bg-white border border-medical-100 rounded-2xl p-6 shadow-sm">
              <div class="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-white font-bold mb-3" :class="dayDotClasses[i]">
                {{ day.marker }}
              </div>
              <h3 class="font-sans text-lg font-bold text-medical-900">{{ day.title }}</h3>
              <p v-if="day.desc" class="mt-2 text-medical-600 text-sm">{{ day.desc }}</p>
              <div v-if="day.sections && day.sections.length" class="mt-4 space-y-4">
                <div v-for="(sec, si) in day.sections" :key="si">
                  <h4 class="text-sm font-semibold text-primary-700 uppercase tracking-wider">{{ sec.title }}</h4>
                  <ul class="mt-2 space-y-1 text-sm text-medical-600">
                    <li v-for="(item, ii) in sec.items" :key="ii" class="flex items-start gap-2">
                      <i class="fa-solid fa-check text-primary-500 mt-1"></i>
                      <span>{{ item }}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <ul v-else-if="day.items && day.items.length" class="mt-4 space-y-1 text-sm text-medical-600">
                <li v-for="(item, ii) in day.items" :key="ii" class="flex items-start gap-2">
                  <i class="fa-solid fa-check text-primary-500 mt-1"></i>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </article>
          </div>
        </li>
      </ol>
    </div>
  </section>

  <!-- INCLUDED -->
  <section class="bg-white">
    <div class="container-page section">
      <div class="max-w-3xl">
        <h2 class="section-title">{{ t('journey.includedTitle') }}</h2>
        <p class="section-sub">{{ t('journey.includedSub') }}</p>
      </div>
      <div class="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(item, i) in included"
          :key="i"
          class="rounded-2xl p-6"
          :class="includedStyles[i].cardClass"
        >
          <div class="w-12 h-12 rounded-xl grid place-items-center text-xl" :class="includedStyles[i].iconClass">
            <i :class="includedStyles[i].icon"></i>
          </div>
          <h3 class="mt-3 font-sans text-lg font-bold text-medical-900">{{ item.title }}</h3>
          <p class="mt-1 text-sm text-medical-600">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="bg-gradient-to-br from-primary-900 via-secondary-900 to-accent-900 text-white">
    <div class="container-page section text-center">
      <h2 class="section-title text-white">{{ t('journey.ctaTitle') }}</h2>
      <p class="mt-4 text-xl text-white/80 max-w-2xl mx-auto">{{ t('journey.ctaDesc') }}</p>
      <div class="mt-8 flex flex-wrap gap-4 justify-center">
        <RouterLink to="/#contact" class="btn-inverse">{{ t('journey.ctaPrimary') }}</RouterLink>
        <RouterLink to="/" class="btn-inverse-outline">{{ t('journey.ctaSecondary') }}</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useMessages } from '@/i18n';

const { t } = useI18n();
const m = useMessages();

const specialCards = computed(() => m.value.journey.specialCards);
const specialStyles = [
  { icon: 'fa-solid fa-heart-pulse', iconClass: 'bg-primary-100 text-primary-600', cardClass: 'bg-gradient-to-br from-primary-50 to-white' },
  { icon: 'fa-solid fa-landmark', iconClass: 'bg-secondary-100 text-secondary-600', cardClass: 'bg-gradient-to-br from-secondary-50 to-white' },
  { icon: 'fa-solid fa-concierge-bell', iconClass: 'bg-accent-100 text-accent-600', cardClass: 'bg-gradient-to-br from-accent-50 to-white' }
];

interface DaySection { title: string; items: readonly string[] }
interface Day { marker: string; title: string; desc?: string; items?: readonly string[]; sections?: readonly DaySection[] }
const days = computed<readonly Day[]>(() => m.value.journey.days as unknown as Day[]);
const dayDotClasses = [
  'bg-medical-700',
  'bg-primary-600',
  'bg-primary-600',
  'bg-accent-500',
  'bg-accent-500',
  'bg-primary-600',
  'bg-medical-700'
];

const included = computed(() => m.value.journey.included);
const includedStyles = [
  { icon: 'fa-solid fa-hotel', iconClass: 'bg-primary-100 text-primary-600', cardClass: 'bg-primary-50' },
  { icon: 'fa-solid fa-car', iconClass: 'bg-secondary-100 text-secondary-600', cardClass: 'bg-secondary-50' },
  { icon: 'fa-solid fa-language', iconClass: 'bg-accent-100 text-accent-600', cardClass: 'bg-accent-50' },
  { icon: 'fa-solid fa-map', iconClass: 'bg-emerald-100 text-emerald-600', cardClass: 'bg-emerald-50' }
];
</script>
