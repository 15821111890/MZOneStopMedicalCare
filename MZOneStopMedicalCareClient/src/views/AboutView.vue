<template>
  <!-- HERO -->
  <section class="hero-gradient text-white">
    <div class="container-page grid lg:grid-cols-2 gap-12 items-center pt-16 pb-24">
      <div>
        <span class="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur px-4 py-2 text-sm">
          <i class="fa-solid fa-hospital"></i>
          Trusted by 1,300+ International Patients
        </span>
        <h1 class="mt-6 font-serif text-5xl md:text-6xl font-bold leading-tight">
          World-Class Healthcare At a Fraction of the Cost
        </h1>
        <p class="mt-6 text-xl text-white/90 max-w-xl">
          In Shanghai, China. From executive screenings and premium dentistry to advanced therapies,
          we guide international patients through every step — medical, logistical, and cultural.
        </p>
        <div class="mt-8 flex flex-wrap gap-4">
          <RouterLink to="/#contact" class="btn-inverse">Get Consultation</RouterLink>
          <a href="#services" class="btn-inverse-outline">Explore Services</a>
        </div>
      </div>
      <div class="relative">
        <img
          class="rounded-3xl shadow-2xl w-full h-[460px] object-cover"
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
          alt="Modern hospital"
        />
        <div class="absolute -bottom-8 -left-8 bg-white text-medical-800 p-6 rounded-2xl shadow-xl w-56">
          <div class="text-3xl font-bold text-primary-600">~80%</div>
          <div class="text-sm text-medical-500 mt-1">Average cost savings</div>
        </div>
      </div>
    </div>
  </section>

  <!-- STATS -->
  <section class="bg-white">
    <div class="container-page py-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div><div class="font-serif text-4xl font-bold text-primary-600">~80%</div><div class="mt-2 text-sm uppercase tracking-wider text-medical-500">Cost Savings</div></div>
      <div><div class="font-serif text-4xl font-bold text-secondary-600">1-2 Days</div><div class="mt-2 text-sm uppercase tracking-wider text-medical-500">Complete Screening</div></div>
      <div><div class="font-serif text-4xl font-bold text-accent-600">&lt; 1 Week</div><div class="mt-2 text-sm uppercase tracking-wider text-medical-500">Appointment Window</div></div>
      <div><div class="font-serif text-4xl font-bold text-primary-600">1.3M+</div><div class="mt-2 text-sm uppercase tracking-wider text-medical-500">Annual Visitors</div></div>
    </div>
  </section>

  <!-- JOURNEY PREVIEW -->
  <section class="bg-gradient-to-br from-primary-50 via-white to-secondary-50">
    <div class="container-page section grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <span class="inline-flex items-center gap-2 rounded-full bg-primary-100 text-primary-700 px-4 py-1.5 text-sm font-medium">
          <i class="fa-solid fa-plane"></i> Heal &amp; Discover
        </span>
        <h2 class="mt-4 section-title">Your 7-Day Medical Journey</h2>
        <p class="mt-4 text-xl text-medical-600">
          Why just get treated when you can experience China? Our all-inclusive journeys blend expert
          care with curated cultural experiences for a trip that's as transformative as it is therapeutic.
        </p>
        <div class="mt-6 flex flex-wrap gap-3 text-sm">
          <span class="flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full">
            <i class="fa-solid fa-hospital"></i> Hospitals
          </span>
          <span class="flex items-center gap-2 bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full">
            <i class="fa-solid fa-hotel"></i> Hotels
          </span>
          <span class="flex items-center gap-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full">
            <i class="fa-solid fa-map"></i> Tours
          </span>
        </div>
        <RouterLink to="/medical-journey" class="mt-8 inline-flex btn-pill bg-primary-600 text-white px-6 py-3 text-sm">
          Explore Your Journey <i class="fa-solid fa-arrow-right ml-1"></i>
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
        <h2 class="section-title">Comprehensive Medical Services</h2>
        <p class="section-sub">
          From preventive care to advanced treatments, our partner institutions cover every major specialty
          — all with English-speaking teams and international-standard workflows.
        </p>
      </div>
      <div class="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="svc in services"
          :key="svc.title"
          class="rounded-3xl p-8 border transition hover:shadow-xl"
          :class="svc.cardClass"
        >
          <div class="w-14 h-14 rounded-2xl grid place-items-center text-2xl mb-5" :class="svc.iconClass">
            <i :class="svc.icon"></i>
          </div>
          <h3 class="font-sans text-xl font-bold text-medical-900">{{ svc.title }}</h3>
          <p class="mt-3 text-medical-600">{{ svc.desc }}</p>
          <div class="mt-5 flex flex-wrap gap-2">
            <span
              v-for="b in svc.badges"
              :key="b"
              class="text-xs font-medium rounded-full px-3 py-1"
              :class="svc.badgeClass"
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
        <h2 class="section-title">Why Choose China for Medical Care?</h2>
        <p class="mt-4 text-lg text-medical-600">
          China combines advanced medical technology, world-class research, and remarkable value — a
          genuinely different proposition from traditional destinations.
        </p>
        <div class="mt-8 grid grid-cols-2 gap-4">
          <div class="bg-white rounded-2xl p-5 shadow-sm">
            <div class="font-serif text-2xl font-bold text-primary-600">JCI</div>
            <div class="mt-1 text-sm font-medium text-medical-700">Accreditation</div>
            <div class="text-xs text-medical-500 mt-1">Gold-standard hospital quality</div>
          </div>
          <div class="bg-white rounded-2xl p-5 shadow-sm">
            <div class="font-serif text-2xl font-bold text-secondary-600">337+</div>
            <div class="mt-1 text-sm font-medium text-medical-700">CAR-T Trials</div>
            <div class="text-xs text-medical-500 mt-1">World leader in immunotherapy</div>
          </div>
          <div class="bg-white rounded-2xl p-5 shadow-sm">
            <div class="font-serif text-2xl font-bold text-accent-600">80%</div>
            <div class="mt-1 text-sm font-medium text-medical-700">Remission Rates</div>
            <div class="text-xs text-medical-500 mt-1">For eligible patients</div>
          </div>
          <div class="bg-white rounded-2xl p-5 shadow-sm">
            <div class="font-serif text-2xl font-bold text-indigo-600">Da Vinci</div>
            <div class="mt-1 text-sm font-medium text-medical-700">Robotic Surgery</div>
            <div class="text-xs text-medical-500 mt-1">Installed in top hospitals</div>
          </div>
        </div>
        <RouterLink to="/why-china" class="mt-8 inline-flex btn-pill bg-primary-600 text-white px-6 py-3 text-sm">
          Learn More <i class="fa-solid fa-arrow-right ml-1"></i>
        </RouterLink>
      </div>
    </div>
  </section>

  <!-- HOW IT WORKS -->
  <section class="bg-white">
    <div class="container-page section">
      <div class="max-w-3xl">
        <h2 class="section-title">How It Works</h2>
        <p class="section-sub">
          Your journey to better health follows a simple, streamlined process — we handle the details
          so you can focus on healing.
        </p>
      </div>
      <ol class="mt-14 grid md:grid-cols-2 lg:grid-cols-5 gap-6">
        <li v-for="(step, i) in steps" :key="step.title" class="text-center">
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
        <h2 class="section-title">About CareBridgeChina</h2>
        <p class="section-sub">
          We understand the healthcare challenges international patients face. Our mission is to bridge
          China's exceptional medical ecosystem with your need for reliable, affordable, patient-first care.
        </p>
      </div>
      <div class="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="item in pillars" :key="item.title" class="bg-white rounded-3xl p-8 shadow-sm text-center">
          <div class="w-16 h-16 mx-auto rounded-full grid place-items-center text-2xl" :class="item.iconClass">
            <i :class="item.icon"></i>
          </div>
          <h3 class="mt-4 font-sans text-lg font-bold text-medical-900">{{ item.title }}</h3>
          <p class="mt-2 text-sm text-medical-600">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

const services = [
  {
    title: 'Executive Health Screening',
    desc: 'Full-panel diagnostics with same-day imaging and international-format reporting.',
    icon: 'fa-solid fa-stethoscope',
    iconClass: 'bg-primary-100 text-primary-600',
    cardClass: 'bg-gradient-to-br from-primary-50 to-white border-primary-100',
    badgeClass: 'bg-primary-100 text-primary-700',
    badges: ['Same-day imaging', 'English support']
  },
  {
    title: 'Dentistry',
    desc: 'Implants, veneers and full-mouth reconstruction with a digital-first workflow.',
    icon: 'fa-solid fa-tooth',
    iconClass: 'bg-secondary-100 text-secondary-600',
    cardClass: 'bg-gradient-to-br from-secondary-50 to-white border-secondary-100',
    badgeClass: 'bg-secondary-100 text-secondary-700',
    badges: ['3D smile design', 'Same-day crowns']
  },
  {
    title: 'Cosmetic & Plastic Surgery',
    desc: 'Anti-aging, body contouring and reconstruction by board-certified surgeons.',
    icon: 'fa-solid fa-user-md',
    iconClass: 'bg-accent-100 text-accent-600',
    cardClass: 'bg-gradient-to-br from-accent-50 to-white border-accent-100',
    badgeClass: 'bg-accent-100 text-accent-700',
    badges: ['3D simulation', 'Private suites']
  },
  {
    title: 'Traditional Chinese Medicine',
    desc: 'Acupuncture, herbs, cupping and tai chi from licensed TCM practitioners.',
    icon: 'fa-solid fa-yin-yang',
    iconClass: 'bg-emerald-100 text-emerald-600',
    cardClass: 'bg-gradient-to-br from-emerald-50 to-white border-emerald-100',
    badgeClass: 'bg-emerald-100 text-emerald-700',
    badges: ['Licensed TCM', 'Custom herbs']
  },
  {
    title: 'CAR-T Cell Therapy',
    desc: 'Access breakthrough immunotherapy at a fraction of US/EU program costs.',
    icon: 'fa-solid fa-dna',
    iconClass: 'bg-rose-100 text-rose-600',
    cardClass: 'bg-gradient-to-br from-rose-50 to-white border-rose-100',
    badgeClass: 'bg-rose-100 text-rose-700',
    badges: ['40% of US cost', 'World-leading']
  },
  {
    title: 'Other Advanced Treatments',
    desc: 'Cardiology, orthopedics and oncology programs with multidisciplinary teams.',
    icon: 'fa-solid fa-heart-pulse',
    iconClass: 'bg-indigo-100 text-indigo-600',
    cardClass: 'bg-gradient-to-br from-indigo-50 to-white border-indigo-100',
    badgeClass: 'bg-indigo-100 text-indigo-700',
    badges: ['Less waiting', 'MDT review']
  }
];

const steps = [
  { title: 'Initial Consultation', desc: 'Share your medical history and goals with our care team.' },
  { title: 'Personalized Planning', desc: 'We review your case and recommend the best-fit hospitals.' },
  { title: 'Pre-Travel Prep', desc: 'Visa, flights, and appointments — handled for you.' },
  { title: 'Arrival & Treatment', desc: 'Airport pickup, guided hospital visits, live translation.' },
  { title: 'Follow-Up Care', desc: 'Remote check-ins and records after you return home.' }
];

const pillars = [
  {
    title: 'Curated Healthcare Network',
    desc: 'Partnerships with Shanghai\'s premier hospitals and specialists.',
    icon: 'fa-solid fa-hospital',
    iconClass: 'bg-primary-100 text-primary-600'
  },
  {
    title: 'Transparent, Flexible Pricing',
    desc: 'Service packages at several price points — no surprises.',
    icon: 'fa-solid fa-dollar-sign',
    iconClass: 'bg-secondary-100 text-secondary-600'
  },
  {
    title: 'Cultural Immersion',
    desc: 'Authentic cultural experiences built into every journey.',
    icon: 'fa-solid fa-landmark',
    iconClass: 'bg-accent-100 text-accent-600'
  },
  {
    title: 'End-to-End Support',
    desc: 'Visa, airport pickup, translation, accommodation — all included.',
    icon: 'fa-solid fa-hands-helping',
    iconClass: 'bg-emerald-100 text-emerald-600'
  }
];
</script>
