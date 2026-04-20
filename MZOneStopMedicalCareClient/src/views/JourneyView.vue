<template>
  <!-- HERO -->
  <section class="bg-gradient-to-br from-primary-50 via-white to-secondary-50">
    <div class="container-page grid lg:grid-cols-2 gap-12 items-center pt-16 pb-24">
      <div>
        <span class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 px-4 py-2 text-sm font-medium">
          <i class="fa-solid fa-plane"></i> The Complete China Experience
        </span>
        <h1 class="mt-5 font-serif text-5xl md:text-6xl font-bold leading-tight text-medical-900">
          Heal &amp; <span class="gradient-text">Discover China</span>
        </h1>
        <p class="mt-5 text-xl text-medical-600 max-w-xl">
          Why just get treated when you can experience one of the world's oldest civilizations?
          Every journey blends expert care with guided cultural immersion.
        </p>
        <div class="mt-8 flex flex-wrap gap-4">
          <a href="#itinerary" class="btn-primary">View 7-Day Itinerary</a>
          <RouterLink to="/#contact" class="btn-outline">Plan My Journey</RouterLink>
        </div>
      </div>
      <div class="relative">
        <img
          class="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
          src="https://images.unsplash.com/photo-1537531383496-f4749b8032cf?auto=format&fit=crop&w=1200&q=80"
          alt="Shanghai skyline"
        />
        <div class="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 w-64">
          <div class="font-serif text-xl font-bold text-primary-600">7 Days</div>
          <div class="text-sm text-medical-500 mt-1">Healthcare + Culture · all-inclusive packages</div>
        </div>
      </div>
    </div>
  </section>

  <!-- WHAT MAKES US DIFFERENT -->
  <section class="bg-white">
    <div class="container-page section">
      <div class="max-w-3xl">
        <h2 class="section-title">What Makes Your Journey Special</h2>
        <p class="section-sub">More than medical tourism — an experience that enriches body, mind, and soul.</p>
      </div>
      <div class="mt-14 grid md:grid-cols-3 gap-6">
        <article class="rounded-3xl p-8 text-center bg-gradient-to-br from-primary-50 to-white">
          <div class="mx-auto w-16 h-16 rounded-full bg-primary-100 text-primary-600 grid place-items-center text-2xl">
            <i class="fa-solid fa-heart-pulse"></i>
          </div>
          <h3 class="mt-4 font-sans text-xl font-bold text-medical-900">World-Class Healthcare</h3>
          <p class="mt-2 text-medical-600">JCI-accredited hospitals, English-speaking doctors, and cutting-edge treatments at a fraction of Western costs.</p>
        </article>
        <article class="rounded-3xl p-8 text-center bg-gradient-to-br from-secondary-50 to-white">
          <div class="mx-auto w-16 h-16 rounded-full bg-secondary-100 text-secondary-600 grid place-items-center text-2xl">
            <i class="fa-solid fa-landmark"></i>
          </div>
          <h3 class="mt-4 font-sans text-xl font-bold text-medical-900">Cultural Immersion</h3>
          <p class="mt-2 text-medical-600">5,000 years of heritage, living traditions, and a vibrant modern culture that reshapes how you see the world.</p>
        </article>
        <article class="rounded-3xl p-8 text-center bg-gradient-to-br from-accent-50 to-white">
          <div class="mx-auto w-16 h-16 rounded-full bg-accent-100 text-accent-600 grid place-items-center text-2xl">
            <i class="fa-solid fa-concierge-bell"></i>
          </div>
          <h3 class="mt-4 font-sans text-xl font-bold text-medical-900">Zero Stress</h3>
          <p class="mt-2 text-medical-600">Airport transfers, hotel, hospital navigation, translators, and guides — all orchestrated by one dedicated team.</p>
        </article>
      </div>
    </div>
  </section>

  <!-- ITINERARY TIMELINE -->
  <section id="itinerary" class="bg-medical-50">
    <div class="container-page section">
      <div class="max-w-3xl">
        <h2 class="section-title">A Typical 7-Day Medical Journey</h2>
        <p class="section-sub">
          Here's an example itinerary — every journey is customized to your procedure, pace, and preferences.
        </p>
      </div>

      <ol class="mt-14 relative max-w-4xl mx-auto">
        <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500 rounded-full"></div>

        <li
          v-for="(day, i) in days"
          :key="day.marker"
          class="relative md:grid md:grid-cols-2 md:gap-12 py-6"
          :class="i % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:col-start-2'"
        >
          <div
            class="hidden md:grid absolute left-1/2 top-8 w-12 h-12 -translate-x-1/2 place-items-center rounded-full text-white font-bold shadow-lg"
            :class="day.dotClass"
          >
            {{ day.marker }}
          </div>

          <div class="md:col-start-1" :class="i % 2 === 1 ? 'md:col-start-2' : ''">
            <article class="bg-white border border-medical-100 rounded-2xl p-6 shadow-sm">
              <div class="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-white font-bold mb-3" :class="day.dotClass">
                {{ day.marker }}
              </div>
              <h3 class="font-sans text-lg font-bold text-medical-900">{{ day.title }}</h3>
              <p v-if="day.desc" class="mt-2 text-medical-600 text-sm">{{ day.desc }}</p>
              <div v-if="day.sections" class="mt-4 space-y-4">
                <div v-for="sec in day.sections" :key="sec.title">
                  <h4 class="text-sm font-semibold text-primary-700 uppercase tracking-wider">{{ sec.title }}</h4>
                  <ul class="mt-2 space-y-1 text-sm text-medical-600">
                    <li v-for="item in sec.items" :key="item" class="flex items-start gap-2">
                      <i class="fa-solid fa-check text-primary-500 mt-1"></i>
                      <span>{{ item }}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <ul v-else-if="day.items" class="mt-4 space-y-1 text-sm text-medical-600">
                <li v-for="item in day.items" :key="item" class="flex items-start gap-2">
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
        <h2 class="section-title">What's Included</h2>
        <p class="section-sub">Everything you need for a worry-free experience.</p>
      </div>
      <div class="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="rounded-2xl p-6 bg-primary-50">
          <div class="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 grid place-items-center text-xl">
            <i class="fa-solid fa-hotel"></i>
          </div>
          <h3 class="mt-3 font-sans text-lg font-bold text-medical-900">Accommodation</h3>
          <p class="mt-1 text-sm text-medical-600">4-star or 5-star hotels near your hospital, with breakfast.</p>
        </div>
        <div class="rounded-2xl p-6 bg-secondary-50">
          <div class="w-12 h-12 rounded-xl bg-secondary-100 text-secondary-600 grid place-items-center text-xl">
            <i class="fa-solid fa-car"></i>
          </div>
          <h3 class="mt-3 font-sans text-lg font-bold text-medical-900">Transportation</h3>
          <p class="mt-1 text-sm text-medical-600">Airport pickup/dropoff, hospital transfers, tour transport.</p>
        </div>
        <div class="rounded-2xl p-6 bg-accent-50">
          <div class="w-12 h-12 rounded-xl bg-accent-100 text-accent-600 grid place-items-center text-xl">
            <i class="fa-solid fa-language"></i>
          </div>
          <h3 class="mt-3 font-sans text-lg font-bold text-medical-900">Translation</h3>
          <p class="mt-1 text-sm text-medical-600">A dedicated coordinator and medical translator throughout.</p>
        </div>
        <div class="rounded-2xl p-6 bg-emerald-50">
          <div class="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 grid place-items-center text-xl">
            <i class="fa-solid fa-map"></i>
          </div>
          <h3 class="mt-3 font-sans text-lg font-bold text-medical-900">Tours</h3>
          <p class="mt-1 text-sm text-medical-600">Guided Shanghai sightseeing with entrance fees included.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="bg-gradient-to-br from-primary-900 via-secondary-900 to-accent-900 text-white">
    <div class="container-page section text-center">
      <h2 class="section-title text-white">Ready for Your Journey?</h2>
      <p class="mt-4 text-xl text-white/80 max-w-2xl mx-auto">
        Combine world-class healthcare with an unforgettable China experience.
      </p>
      <div class="mt-8 flex flex-wrap gap-4 justify-center">
        <RouterLink to="/#contact" class="btn-inverse">Plan My Journey</RouterLink>
        <RouterLink to="/" class="btn-inverse-outline">Back to Home</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

const days = [
  {
    marker: '0',
    title: 'Day 0 · Pre-Departure',
    desc: 'Consultation review, final checklist, and travel briefing so you land knowing exactly what to expect.',
    dotClass: 'bg-medical-700'
  },
  {
    marker: '1',
    title: 'Day 1 · Welcome to Shanghai',
    dotClass: 'bg-primary-600',
    items: [
      'VIP airport pickup',
      'Hotel check-in and orientation',
      'Neighborhood walk-through',
      'Welcome dinner with your coordinator'
    ]
  },
  {
    marker: '2',
    title: 'Day 2 · Screening + The Bund',
    dotClass: 'bg-primary-600',
    sections: [
      { title: 'Morning · Health Screening Day', items: ['Executive health screening', 'Advanced imaging', 'Specialist consultations'] },
      { title: 'Afternoon · Culture', items: ['Guided tour of the Bund', 'Early dinner in the French Concession'] }
    ]
  },
  {
    marker: '3',
    title: 'Day 3 · Procedure or Exploration',
    dotClass: 'bg-accent-500',
    sections: [
      { title: 'Option A · Procedure Day', items: ['Procedure at partner hospital', 'Recovery with medical staff'] },
      { title: 'Option B · Tourism Day', items: ['Yu Garden and Yuyuan Bazaar', 'TCM wellness session'] }
    ]
  },
  {
    marker: '4',
    title: 'Day 4 · Full-Day Sightseeing',
    dotClass: 'bg-accent-500',
    items: [
      'Shanghai Tower observation deck',
      'Yu Garden classical garden',
      'French Concession walk',
      'Huangpu River evening cruise'
    ]
  },
  {
    marker: '5',
    title: 'Day 5 · Follow-Up + Choices',
    dotClass: 'bg-primary-600',
    sections: [
      { title: 'Morning · Medical', items: ['Follow-up consultation', 'Results review and recommendations'] },
      { title: 'Afternoon · Your Choice', items: ['Night market food tour', 'Spa & wellness session', 'Art district exploration'] }
    ]
  },
  {
    marker: '6–7',
    title: 'Day 6–7 · Return or Extend',
    dotClass: 'bg-medical-700',
    sections: [
      { title: 'Option A · Return Home', items: ['Final checkup', 'Concierge airport transfer', 'Remote follow-up schedule'] },
      { title: 'Option B · Extend Journey', items: ['Beijing, Hangzhou, Chengdu or Guilin', 'All logistics handled for you'] }
    ]
  }
];
</script>
