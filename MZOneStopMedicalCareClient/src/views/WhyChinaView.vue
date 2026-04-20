<template>
  <!-- HERO -->
  <section class="bg-gradient-to-br from-primary-50 via-white to-secondary-50">
    <div class="container-page grid lg:grid-cols-2 gap-12 items-center pt-16 pb-24">
      <div>
        <span class="inline-flex items-center gap-2 rounded-full bg-primary-100 text-primary-700 px-4 py-2 text-sm font-medium">
          <i class="fa-solid fa-globe"></i> {{ t('whyChina.heroBadge') }}
        </span>
        <h1 class="mt-5 font-serif text-5xl md:text-6xl font-bold leading-tight text-medical-900">
          {{ t('whyChina.heroTitle1') }} <span class="gradient-text">{{ t('whyChina.heroTitle2') }}</span>
        </h1>
        <p class="mt-5 text-xl text-medical-600 max-w-xl">{{ t('whyChina.heroDesc') }}</p>
        <div class="mt-8 flex flex-wrap gap-4">
          <RouterLink to="/#contact" class="btn-primary">{{ t('whyChina.heroCtaStart') }}</RouterLink>
          <RouterLink to="/about" class="btn-outline">{{ t('whyChina.heroCtaLearn') }}</RouterLink>
        </div>
      </div>
      <div class="relative">
        <img
          class="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
          src="https://images.unsplash.com/photo-1537531383496-f4749b8032cf?auto=format&fit=crop&w=1200&q=80"
          alt="Shanghai cityscape"
        />
        <div class="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 w-56">
          <div class="text-3xl font-bold text-primary-600">{{ t('whyChina.heroStatValue') }}</div>
          <div class="text-sm text-medical-500 mt-1">{{ t('whyChina.heroStatLabel') }}</div>
        </div>
      </div>
    </div>
  </section>

  <!-- FOUR PILLARS -->
  <section class="bg-white">
    <div class="container-page section">
      <div class="max-w-3xl">
        <h2 class="section-title">{{ t('whyChina.pillarsTitle') }}</h2>
        <p class="section-sub">{{ t('whyChina.pillarsSub') }}</p>
      </div>
      <div class="mt-14 grid md:grid-cols-2 gap-6">
        <!-- Value -->
        <article class="rounded-3xl p-8 text-white bg-gradient-to-br from-teal-500 to-teal-600">
          <div class="w-14 h-14 rounded-2xl bg-white/20 grid place-items-center text-2xl mb-5">
            <i class="fa-solid fa-dollar-sign"></i>
          </div>
          <h3 class="font-sans text-2xl font-bold">{{ t('whyChina.valueTitle') }}</h3>
          <p class="mt-3 text-white/90">{{ t('whyChina.valueDesc') }}</p>
          <div class="mt-6 space-y-3">
            <div
              v-for="(item, i) in valueItems"
              :key="i"
              class="flex items-center justify-between bg-white/15 rounded-xl px-4 py-3"
            >
              <span class="font-medium">{{ item.label }}</span>
              <span><strong>{{ item.price }}</strong> <span class="text-white/70 text-sm">{{ item.compare }}</span></span>
            </div>
          </div>
        </article>

        <!-- Access -->
        <article class="rounded-3xl p-8 text-white bg-gradient-to-br from-emerald-500 to-emerald-600">
          <div class="w-14 h-14 rounded-2xl bg-white/20 grid place-items-center text-2xl mb-5">
            <i class="fa-solid fa-clock"></i>
          </div>
          <h3 class="font-sans text-2xl font-bold">{{ t('whyChina.accessTitle') }}</h3>
          <ul class="mt-5 space-y-3 text-white/90">
            <li v-for="item in accessItems" :key="item" class="flex items-start gap-3">
              <i class="fa-solid fa-check-circle mt-1"></i><span>{{ item }}</span>
            </li>
          </ul>
        </article>

        <!-- Innovation -->
        <article class="rounded-3xl p-8 text-white bg-gradient-to-br from-cyan-500 to-cyan-600">
          <div class="w-14 h-14 rounded-2xl bg-white/20 grid place-items-center text-2xl mb-5">
            <i class="fa-solid fa-microscope"></i>
          </div>
          <h3 class="font-sans text-2xl font-bold">{{ t('whyChina.innovationTitle') }}</h3>
          <div class="mt-5 grid grid-cols-2 gap-4">
            <div v-for="(stat, i) in innovationStats" :key="i" class="bg-white/15 rounded-xl p-4">
              <div class="text-2xl font-bold">{{ stat.value }}</div>
              <div class="text-sm text-white/80">{{ stat.label }}</div>
            </div>
          </div>
        </article>

        <!-- Facilities -->
        <article class="rounded-3xl p-8 text-white bg-gradient-to-br from-violet-500 to-violet-600">
          <div class="w-14 h-14 rounded-2xl bg-white/20 grid place-items-center text-2xl mb-5">
            <i class="fa-solid fa-hospital"></i>
          </div>
          <h3 class="font-sans text-2xl font-bold">{{ t('whyChina.facilitiesTitle') }}</h3>
          <ul class="mt-5 space-y-3 text-white/90">
            <li v-for="(item, i) in facilitiesItems" :key="i" class="flex items-start gap-3">
              <i class="fa-solid mt-1" :class="facilityIcons[i]"></i><span>{{ item }}</span>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>

  <!-- SHANGHAI -->
  <section class="bg-gradient-to-br from-primary-50 via-white to-secondary-50">
    <div class="container-page section grid lg:grid-cols-2 gap-12 items-center">
      <img
        class="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
        src="https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?auto=format&fit=crop&w=1200&q=80"
        alt="Shanghai Tower"
      />
      <div>
        <h2 class="section-title">{{ t('whyChina.shanghaiTitle') }}</h2>
        <div class="mt-5 space-y-4 text-lg text-medical-600">
          <p v-for="(p, i) in shanghaiParas" :key="i">{{ p }}</p>
        </div>
        <div class="mt-6 flex flex-wrap gap-3 text-sm">
          <span class="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full">
            <i class="fa-solid fa-shield-halved"></i> {{ shanghaiTags[0] }}
          </span>
          <span class="inline-flex items-center gap-2 bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full">
            <i class="fa-solid fa-subway"></i> {{ shanghaiTags[1] }}
          </span>
          <span class="inline-flex items-center gap-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full">
            <i class="fa-solid fa-globe"></i> {{ shanghaiTags[2] }}
          </span>
        </div>
      </div>
    </div>
  </section>

  <!-- CULTURAL EXPERIENCE -->
  <section class="bg-white">
    <div class="container-page section">
      <div class="max-w-3xl">
        <h2 class="section-title">{{ t('whyChina.cultureTitle') }}</h2>
        <p class="section-sub">{{ t('whyChina.cultureSub') }}</p>
      </div>
      <div class="mt-14 grid md:grid-cols-3 gap-6">
        <article
          v-for="(card, i) in cultureCards"
          :key="i"
          class="rounded-3xl p-8 border"
          :class="cultureStyles[i].cardClass"
        >
          <div class="w-14 h-14 rounded-2xl grid place-items-center text-2xl mb-5" :class="cultureStyles[i].iconClass">
            <i :class="cultureStyles[i].icon"></i>
          </div>
          <h3 class="font-sans text-xl font-bold text-medical-900">{{ card.title }}</h3>
          <p class="mt-3 text-medical-600">{{ card.desc }}</p>
        </article>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="bg-gradient-to-br from-primary-900 via-secondary-900 to-accent-900 text-white">
    <div class="container-page section text-center">
      <h2 class="section-title text-white">{{ t('whyChina.ctaTitle') }}</h2>
      <p class="mt-4 text-xl text-white/80 max-w-2xl mx-auto">{{ t('whyChina.ctaDesc') }}</p>
      <div class="mt-8 flex flex-wrap gap-4 justify-center">
        <RouterLink to="/#contact" class="btn-inverse">{{ t('whyChina.ctaPrimary') }}</RouterLink>
        <RouterLink to="/explore-china" class="btn-inverse-outline">{{ t('whyChina.ctaSecondary') }}</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t, tm, rt } = useI18n();

const valueItems = computed(() =>
  (tm('whyChina.valueItems') as unknown as { label: string; price: string; compare: string }[]).map((s) => ({
    label: rt(s.label),
    price: rt(s.price),
    compare: rt(s.compare)
  }))
);

const accessItems = computed(() =>
  (tm('whyChina.accessItems') as unknown as string[]).map((s) => rt(s))
);

const innovationStats = computed(() =>
  (tm('whyChina.innovationStats') as unknown as { value: string; label: string }[]).map((s) => ({
    value: rt(s.value),
    label: rt(s.label)
  }))
);

const facilitiesItems = computed(() =>
  (tm('whyChina.facilitiesItems') as unknown as string[]).map((s) => rt(s))
);
const facilityIcons = ['fa-certificate', 'fa-robot', 'fa-brain', 'fa-user-md'];

const shanghaiParas = computed(() =>
  (tm('whyChina.shanghaiParas') as unknown as string[]).map((s) => rt(s))
);
const shanghaiTags = computed(() =>
  (tm('whyChina.shanghaiTags') as unknown as string[]).map((s) => rt(s))
);

const cultureCards = computed(() =>
  (tm('whyChina.culture') as unknown as { title: string; desc: string }[]).map((s) => ({
    title: rt(s.title),
    desc: rt(s.desc)
  }))
);
const cultureStyles = [
  { icon: 'fa-solid fa-landmark', iconClass: 'bg-amber-100 text-amber-600', cardClass: 'bg-amber-50 border-amber-100' },
  { icon: 'fa-solid fa-utensils', iconClass: 'bg-rose-100 text-rose-600', cardClass: 'bg-rose-50 border-rose-100' },
  { icon: 'fa-solid fa-city', iconClass: 'bg-purple-100 text-purple-600', cardClass: 'bg-purple-50 border-purple-100' }
];
</script>
