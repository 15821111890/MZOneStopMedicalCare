<template>
  <!-- HERO -->
  <section class="hero-gradient text-white">
    <div class="container-page grid lg:grid-cols-2 gap-12 items-center pt-16 pb-24">
      <div>
        <span class="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur px-4 py-2 text-sm">
          <i class="fa-solid fa-hospital"></i>
          {{ t('about.heroBadge') }}
        </span>
        <h1 class="mt-6 font-serif text-5xl md:text-6xl font-bold leading-tight">
          {{ t('about.heroTitle') }}
        </h1>
        <p class="mt-6 text-xl text-white/90 max-w-xl">{{ t('about.heroDesc') }}</p>
        <div class="mt-8 flex flex-wrap gap-4">
          <RouterLink to="/#contact" class="btn-inverse">{{ t('about.heroCtaConsult') }}</RouterLink>
          <a href="#services" class="btn-inverse-outline">{{ t('about.heroCtaExplore') }}</a>
        </div>
      </div>
      <div class="relative">
        <img
          class="rounded-3xl shadow-2xl w-full h-[460px] object-cover"
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
          :alt="t('about.heroImageAlt')"
        />
        <div class="absolute -bottom-8 -left-8 bg-white text-medical-800 p-6 rounded-2xl shadow-xl w-56">
          <div class="text-3xl font-bold text-primary-600">{{ t('about.heroSavingsValue') }}</div>
          <div class="text-sm text-medical-500 mt-1">{{ t('about.heroSavingsLabel') }}</div>
        </div>
      </div>
    </div>
  </section>

  <!-- STATS -->
  <section class="bg-white">
    <div class="container-page py-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div v-for="(stat, i) in homeStats" :key="i">
        <div class="font-serif text-4xl font-bold" :class="statColors[i]">{{ stat.value }}</div>
        <div class="mt-2 text-sm uppercase tracking-wider text-medical-500">{{ stat.label }}</div>
      </div>
    </div>
  </section>

  <!-- JOURNEY PREVIEW -->
  <section class="bg-gradient-to-br from-primary-50 via-white to-secondary-50">
    <div class="container-page section grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <span class="inline-flex items-center gap-2 rounded-full bg-primary-100 text-primary-700 px-4 py-1.5 text-sm font-medium">
          <i class="fa-solid fa-plane"></i> {{ t('about.journeyBadge') }}
        </span>
        <h2 class="mt-4 section-title">{{ t('about.journeyTitle') }}</h2>
        <p class="mt-4 text-xl text-medical-600">{{ t('about.journeyDesc') }}</p>
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
          {{ t('about.journeyCta') }} <i class="fa-solid fa-arrow-right ml-1"></i>
        </RouterLink>
      </div>
      <img
        class="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
        src="https://images.unsplash.com/photo-1537531383496-f4749b8032cf?auto=format&fit=crop&w=1200&q=80"
        alt="Shanghai skyline"
      />
    </div>
  </section>

  <!-- SERVICES -->
  <section id="services" class="bg-white">
    <div class="container-page section">
      <div class="max-w-3xl">
        <h2 class="section-title">{{ t('about.servicesTitle') }}</h2>
        <p class="section-sub">{{ t('about.servicesSub') }}</p>
      </div>
      <div class="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="(svc, i) in services"
          :key="i"
          class="rounded-3xl p-8 border transition hover:shadow-xl"
          :class="serviceStyles[i].cardClass"
        >
          <div class="w-14 h-14 rounded-2xl grid place-items-center text-2xl mb-5" :class="serviceStyles[i].iconClass">
            <i :class="serviceStyles[i].icon"></i>
          </div>
          <h3 class="font-sans text-xl font-bold text-medical-900">{{ svc.title }}</h3>
          <p class="mt-3 text-medical-600">{{ svc.desc }}</p>
          <div class="mt-5 flex flex-wrap gap-2">
            <span
              v-for="b in svc.badges"
              :key="b"
              class="text-xs font-medium rounded-full px-3 py-1"
              :class="serviceStyles[i].badgeClass"
            >
              {{ b }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- WHY CHINA -->
  <section class="bg-gradient-to-br from-primary-50 via-white to-secondary-50">
    <div class="container-page section grid lg:grid-cols-2 gap-12 items-center">
      <img
        class="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
        src="https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?auto=format&fit=crop&w=1200&q=80"
        alt="Shanghai Tower"
      />
      <div>
        <h2 class="section-title">{{ t('about.whyTitle') }}</h2>
        <p class="mt-4 text-lg text-medical-600">{{ t('about.whyDesc') }}</p>
        <div class="mt-8 grid grid-cols-2 gap-4">
          <div v-for="(stat, i) in whyStats" :key="i" class="bg-white rounded-2xl p-5 shadow-sm">
            <div class="font-serif text-2xl font-bold" :class="whyStatColors[i]">{{ stat.value }}</div>
            <div class="mt-1 text-sm font-medium text-medical-700">{{ stat.title }}</div>
            <div class="text-xs text-medical-500 mt-1">{{ stat.sub }}</div>
          </div>
        </div>
        <RouterLink to="/why-china" class="mt-8 inline-flex btn-pill bg-primary-600 text-white px-6 py-3 text-sm">
          {{ t('about.whyCta') }} <i class="fa-solid fa-arrow-right ml-1"></i>
        </RouterLink>
      </div>
    </div>
  </section>

  <!-- HOW IT WORKS -->
  <section class="bg-white">
    <div class="container-page section">
      <div class="max-w-3xl">
        <h2 class="section-title">{{ t('about.howTitle') }}</h2>
        <p class="section-sub">{{ t('about.howSub') }}</p>
      </div>
      <ol class="mt-14 grid md:grid-cols-2 lg:grid-cols-5 gap-6">
        <li v-for="(step, i) in steps" :key="i" class="text-center">
          <div class="mx-auto w-16 h-16 rounded-full bg-primary-600 text-white grid place-items-center font-serif text-2xl font-bold">
            {{ i + 1 }}
          </div>
          <h3 class="mt-4 font-sans text-lg font-bold text-medical-900">{{ step.title }}</h3>
          <p class="mt-2 text-sm text-medical-600">{{ step.desc }}</p>
        </li>
      </ol>
    </div>
  </section>

  <!-- ABOUT -->
  <section class="bg-gradient-to-br from-secondary-50 via-white to-primary-50">
    <div class="container-page section">
      <div class="max-w-3xl">
        <h2 class="section-title">{{ t('about.aboutTitle') }}</h2>
        <p class="section-sub">{{ t('about.aboutSub') }}</p>
      </div>
      <div class="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="(item, i) in pillars" :key="i" class="bg-white rounded-3xl p-8 shadow-sm text-center">
          <div class="w-16 h-16 mx-auto rounded-full grid place-items-center text-2xl" :class="pillarStyles[i].iconClass">
            <i :class="pillarStyles[i].icon"></i>
          </div>
          <h3 class="mt-4 font-sans text-lg font-bold text-medical-900">{{ item.title }}</h3>
          <p class="mt-2 text-sm text-medical-600">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t, tm, rt } = useI18n();

const homeStats = computed(() =>
  (tm('home.stats') as unknown as { value: string; label: string }[]).map((s) => ({
    value: rt(s.value),
    label: rt(s.label)
  }))
);
const statColors = ['text-primary-600', 'text-secondary-600', 'text-accent-600', 'text-primary-600'];

const journeyTags = computed(() =>
  (tm('about.journeyTags') as unknown as string[]).map((s) => rt(s))
);

const services = computed(() =>
  (tm('about.services') as unknown as { title: string; desc: string; badges: string[] }[]).map((s) => ({
    title: rt(s.title),
    desc: rt(s.desc),
    badges: (s.badges as unknown as string[]).map((b) => rt(b))
  }))
);

const serviceStyles = [
  { icon: 'fa-solid fa-stethoscope', iconClass: 'bg-primary-100 text-primary-600', cardClass: 'bg-gradient-to-br from-primary-50 to-white border-primary-100', badgeClass: 'bg-primary-100 text-primary-700' },
  { icon: 'fa-solid fa-tooth', iconClass: 'bg-secondary-100 text-secondary-600', cardClass: 'bg-gradient-to-br from-secondary-50 to-white border-secondary-100', badgeClass: 'bg-secondary-100 text-secondary-700' },
  { icon: 'fa-solid fa-user-md', iconClass: 'bg-accent-100 text-accent-600', cardClass: 'bg-gradient-to-br from-accent-50 to-white border-accent-100', badgeClass: 'bg-accent-100 text-accent-700' },
  { icon: 'fa-solid fa-yin-yang', iconClass: 'bg-emerald-100 text-emerald-600', cardClass: 'bg-gradient-to-br from-emerald-50 to-white border-emerald-100', badgeClass: 'bg-emerald-100 text-emerald-700' },
  { icon: 'fa-solid fa-dna', iconClass: 'bg-rose-100 text-rose-600', cardClass: 'bg-gradient-to-br from-rose-50 to-white border-rose-100', badgeClass: 'bg-rose-100 text-rose-700' },
  { icon: 'fa-solid fa-heart-pulse', iconClass: 'bg-indigo-100 text-indigo-600', cardClass: 'bg-gradient-to-br from-indigo-50 to-white border-indigo-100', badgeClass: 'bg-indigo-100 text-indigo-700' }
];

const whyStats = computed(() =>
  (tm('about.whyStats') as unknown as { value: string; title: string; sub: string }[]).map((s) => ({
    value: rt(s.value),
    title: rt(s.title),
    sub: rt(s.sub)
  }))
);
const whyStatColors = ['text-primary-600', 'text-secondary-600', 'text-accent-600', 'text-indigo-600'];

const steps = computed(() =>
  (tm('about.steps') as unknown as { title: string; desc: string }[]).map((s) => ({
    title: rt(s.title),
    desc: rt(s.desc)
  }))
);

const pillars = computed(() =>
  (tm('about.pillars') as unknown as { title: string; desc: string }[]).map((s) => ({
    title: rt(s.title),
    desc: rt(s.desc)
  }))
);
const pillarStyles = [
  { icon: 'fa-solid fa-hospital', iconClass: 'bg-primary-100 text-primary-600' },
  { icon: 'fa-solid fa-dollar-sign', iconClass: 'bg-secondary-100 text-secondary-600' },
  { icon: 'fa-solid fa-landmark', iconClass: 'bg-accent-100 text-accent-600' },
  { icon: 'fa-solid fa-hands-helping', iconClass: 'bg-emerald-100 text-emerald-600' }
];
</script>
