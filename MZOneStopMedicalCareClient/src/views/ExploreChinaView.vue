<template>
  <!-- HERO -->
  <section class="bg-gradient-to-br from-primary-50 via-white to-secondary-50">
    <div class="container-page text-center pt-16 pb-24">
      <span class="inline-flex items-center gap-2 rounded-full bg-primary-100 text-primary-700 px-4 py-2 text-sm font-medium">
        <i class="fa-solid fa-map-location-dot"></i> {{ t('explore.heroBadge') }}
      </span>
      <h1 class="mt-5 font-serif text-5xl md:text-6xl font-bold leading-tight text-medical-900">
        {{ t('explore.heroTitle1') }} <span class="gradient-text">{{ t('explore.heroTitle2') }}</span>
      </h1>
      <p class="mt-5 text-xl text-medical-600 max-w-3xl mx-auto">{{ t('explore.heroDesc') }}</p>
    </div>
  </section>

  <!-- SHANGHAI HIGHLIGHTS -->
  <section class="bg-white">
    <div class="container-page section">
      <div class="max-w-3xl">
        <h2 class="section-title">{{ t('explore.highlightsTitle') }}</h2>
        <p class="section-sub">{{ t('explore.highlightsSub') }}</p>
      </div>
      <div class="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <figure
          v-for="(card, i) in highlights"
          :key="i"
          class="relative overflow-hidden rounded-3xl h-80 group"
        >
          <img
            :src="highlightImgs[i]"
            :alt="card.title"
            class="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />
          <figcaption class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end text-white">
            <h3 class="font-serif text-2xl font-bold">{{ card.title }}</h3>
            <p class="mt-2 text-sm text-white/80">{{ card.desc }}</p>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- CULTURAL IMMERSION -->
  <section class="bg-gradient-to-br from-amber-50 via-white to-rose-50">
    <div class="container-page section">
      <div class="max-w-3xl">
        <h2 class="section-title">{{ t('explore.experiencesTitle') }}</h2>
        <p class="section-sub">{{ t('explore.experiencesSub') }}</p>
      </div>
      <div class="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="(item, i) in experiences"
          :key="i"
          class="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition"
        >
          <img :src="experienceImgs[i]" :alt="item.title" class="w-full h-56 object-cover" />
          <div class="p-6">
            <span
              class="inline-block text-xs font-medium rounded-full px-3 py-1"
              :class="experienceIncluded[i] ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'"
            >
              {{ experienceIncluded[i] ? t('explore.premiumTag') : t('explore.addonTag') }}
            </span>
            <h3 class="mt-3 font-sans text-xl font-bold text-medical-900">{{ item.title }}</h3>
            <p class="mt-2 text-sm text-medical-600">{{ item.desc }}</p>
            <div class="mt-4 text-xs text-medical-500 flex items-center gap-3">
              <span><i class="fa-solid fa-clock"></i> {{ item.duration }}</span>
              <span>·</span>
              <span>{{ item.location }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- BEYOND SHANGHAI -->
  <section class="bg-white">
    <div class="container-page section">
      <div class="max-w-3xl">
        <h2 class="section-title">{{ t('explore.beyondTitle') }}</h2>
        <p class="section-sub">{{ t('explore.beyondSub') }}</p>
      </div>
      <div class="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <article
          v-for="(dest, i) in destinations"
          :key="i"
          class="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition"
        >
          <div class="relative overflow-hidden h-56">
            <img :src="destinationImgs[i]" :alt="dest.title" class="w-full h-full object-cover hover:scale-110 transition duration-500" />
            <span
              v-if="dest.badge"
              class="absolute top-3 right-3 text-xs font-bold text-white bg-rose-600 rounded-full px-3 py-1 tracking-wider"
            >
              {{ dest.badge }}
            </span>
          </div>
          <div class="p-6">
            <h3 class="font-sans text-xl font-bold text-medical-900">{{ dest.title }}</h3>
            <p class="mt-2 text-sm text-medical-600">{{ dest.desc }}</p>
            <div class="mt-4 flex items-center justify-between text-sm">
              <span class="text-medical-500"><i class="fa-solid fa-clock"></i> {{ dest.duration }}</span>
              <span class="text-primary-600 font-semibold">{{ t('explore.fromLabel') }} {{ dest.price }}</span>
            </div>
          </div>
        </article>
      </div>

      <div class="mt-12 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-3xl p-8 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
        <div>
          <h3 class="font-serif text-2xl font-bold">{{ t('explore.extendTitle') }}</h3>
          <p class="mt-2 text-white/80 max-w-2xl">{{ t('explore.extendDesc') }}</p>
        </div>
        <RouterLink to="/#contact" class="btn-pill bg-white text-primary-600 px-6 py-3 font-semibold">
          {{ t('explore.extendCta') }}
        </RouterLink>
      </div>
    </div>
  </section>

  <!-- TRAVEL & STAY -->
  <section class="bg-gradient-to-br from-blue-50 via-white to-indigo-50">
    <div class="container-page section">
      <div class="max-w-3xl">
        <h2 class="section-title">{{ t('explore.stayTitle') }}</h2>
        <p class="section-sub">{{ t('explore.staySub') }}</p>
      </div>

      <div class="mt-14 grid lg:grid-cols-2 gap-8">
        <article
          v-for="(hotel, i) in hotels"
          :key="i"
          class="bg-white rounded-3xl overflow-hidden shadow-lg"
        >
          <img :src="hotelImgs[i]" :alt="hotel.title" class="w-full h-64 object-cover" />
          <div class="p-8">
            <header class="flex items-start justify-between gap-3">
              <h3 class="font-serif text-2xl font-bold text-medical-900">{{ hotel.title }}</h3>
              <span class="text-xs font-medium rounded-full px-3 py-1" :class="hotelBadgeClasses[i]">
                {{ hotel.badge }}
              </span>
            </header>
            <p class="mt-3 text-medical-600">{{ hotel.desc }}</p>
            <ul class="mt-5 space-y-2 text-medical-700">
              <li v-for="(amenity, j) in hotel.amenities" :key="j" class="flex items-start gap-3">
                <i class="fa-solid fa-check-circle text-emerald-500 mt-1"></i>
                <span>{{ amenity }}</span>
              </li>
            </ul>
          </div>
        </article>
      </div>

      <div class="mt-12 bg-white rounded-3xl p-8 shadow-lg">
        <div class="flex items-start gap-5">
          <span class="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 grid place-items-center text-2xl">
            <i class="fa-solid fa-shield-halved"></i>
          </span>
          <div>
            <h3 class="font-serif text-2xl font-bold text-medical-900">{{ t('explore.safetyTitle') }}</h3>
            <p class="mt-2 text-medical-600">{{ t('explore.safetyDesc') }}</p>
          </div>
        </div>
        <div class="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div v-for="(stat, i) in safetyStats" :key="i">
            <div class="font-serif text-3xl font-bold" :class="safetyColors[i]">{{ stat.value }}</div>
            <div class="text-sm text-medical-500 mt-1">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="bg-gradient-to-br from-primary-900 via-secondary-900 to-accent-900 text-white">
    <div class="container-page section text-center">
      <h2 class="section-title text-white">{{ t('explore.ctaTitle') }}</h2>
      <p class="mt-4 text-xl text-white/80 max-w-2xl mx-auto">{{ t('explore.ctaDesc') }}</p>
      <div class="mt-8 flex flex-wrap gap-4 justify-center">
        <RouterLink to="/medical-journey" class="btn-inverse">{{ t('explore.ctaPrimary') }}</RouterLink>
        <RouterLink to="/#contact" class="btn-inverse-outline">{{ t('explore.ctaSecondary') }}</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t, tm, rt } = useI18n();

const highlightImgs = [
  'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1565521990426-613d7b8767b4?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1538669716095-09471c8a6c7a?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?auto=format&fit=crop&w=1200&q=80'
];

const highlights = computed(() =>
  (tm('explore.highlights') as unknown as { title: string; desc: string }[]).map((s) => ({
    title: rt(s.title),
    desc: rt(s.desc)
  }))
);

const experienceImgs = [
  'https://images.unsplash.com/photo-1545167496-31b3d3e27358?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1555212697-194d092e3b8f?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1515002246390-7bf7e8f87b54?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1538669716095-09471c8a6c7a?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1512813195386-6cf811ad3542?auto=format&fit=crop&w=1200&q=80'
];
const experienceIncluded = [true, true, true, false, false, true];

const experiences = computed(() =>
  (tm('explore.experiences') as unknown as { title: string; desc: string; duration: string; location: string }[]).map((s) => ({
    title: rt(s.title),
    desc: rt(s.desc),
    duration: rt(s.duration),
    location: rt(s.location)
  }))
);

const destinationImgs = [
  'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1560851691-ebb648885d56?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1537531383496-f4749b8032cf?auto=format&fit=crop&w=1200&q=80'
];

const destinations = computed(() =>
  (tm('explore.destinations') as unknown as { title: string; desc: string; duration: string; price: string; badge: string }[]).map((s) => ({
    title: rt(s.title),
    desc: rt(s.desc),
    duration: rt(s.duration),
    price: rt(s.price),
    badge: rt(s.badge)
  }))
);

const hotelImgs = [
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80'
];
const hotelBadgeClasses = ['bg-blue-100 text-blue-700', 'bg-amber-100 text-amber-700'];

const hotels = computed(() =>
  (tm('explore.hotels') as unknown as { title: string; desc: string; badge: string; amenities: string[] }[]).map((s) => ({
    title: rt(s.title),
    desc: rt(s.desc),
    badge: rt(s.badge),
    amenities: (s.amenities as unknown as string[]).map((a) => rt(a))
  }))
);

const safetyStats = computed(() =>
  (tm('explore.safetyStats') as unknown as { value: string; label: string }[]).map((s) => ({
    value: rt(s.value),
    label: rt(s.label)
  }))
);
const safetyColors = ['text-emerald-600', 'text-primary-600', 'text-secondary-600', 'text-accent-600'];
</script>
