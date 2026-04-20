<template>
  <!-- HERO -->
  <section class="hero-gradient text-white">
    <div class="container-page grid lg:grid-cols-2 gap-12 items-center pt-16 pb-24">
      <div>
        <span class="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur px-4 py-2 text-sm">
          <i class="fa-solid fa-hospital"></i>
          Trusted by 1,300+ International Patients
        </span>
        <h1 class="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          World-Class Healthcare
          <span class="block text-primary-200">In Shanghai</span>
        </h1>
        <p class="mt-6 text-xl text-white/90 max-w-xl">
          Experience China's cutting-edge medical services — from executive health screenings
          and premium dentistry to advanced treatments like CAR-T therapy. Save up to 80%
          on world-class care while discovering one of Asia's most dynamic cities.
        </p>
        <div class="mt-8 flex flex-wrap gap-4">
          <a href="#contact" class="btn-inverse">Get Free Consultation</a>
          <RouterLink to="/about" class="btn-inverse-outline">Learn More</RouterLink>
        </div>
      </div>
      <div class="relative">
        <img
          class="rounded-3xl shadow-2xl w-full h-[460px] object-cover"
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
          alt="Modern hospital in Shanghai"
        />
        <div class="absolute -bottom-8 -left-8 bg-white text-medical-800 p-6 rounded-2xl shadow-xl w-56">
          <div class="text-3xl font-bold text-primary-600">~80%</div>
          <div class="text-sm text-medical-500 mt-1">Average cost savings vs. US procedures</div>
        </div>
      </div>
    </div>
  </section>

  <!-- STATS -->
  <section class="bg-white">
    <div class="container-page py-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div>
        <div class="font-serif text-4xl font-bold text-primary-600">~80%</div>
        <div class="mt-2 text-sm uppercase tracking-wider text-medical-500">Cost Savings</div>
      </div>
      <div>
        <div class="font-serif text-4xl font-bold text-secondary-600">1-2 Days</div>
        <div class="mt-2 text-sm uppercase tracking-wider text-medical-500">Complete Screening</div>
      </div>
      <div>
        <div class="font-serif text-4xl font-bold text-accent-600">&lt; 1 Week</div>
        <div class="mt-2 text-sm uppercase tracking-wider text-medical-500">Appointment Window</div>
      </div>
      <div>
        <div class="font-serif text-4xl font-bold text-primary-600">1.3M+</div>
        <div class="mt-2 text-sm uppercase tracking-wider text-medical-500">Annual Visitors</div>
      </div>
    </div>
  </section>

  <!-- SERVICES -->
  <section id="services" class="bg-gradient-to-br from-primary-50 via-white to-secondary-50">
    <div class="container-page section">
      <div class="max-w-3xl">
        <h2 class="section-title">Our Medical Services</h2>
        <p class="section-sub">
          From preventive screenings to advanced treatments, our partner hospitals in Shanghai
          deliver world-class care across every major specialty.
        </p>
      </div>

      <div class="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="svc in services"
          :key="svc.title"
          class="bg-white rounded-3xl border border-medical-100 p-8 hover:shadow-xl transition"
        >
          <div
            class="w-14 h-14 rounded-2xl grid place-items-center text-2xl mb-5"
            :class="svc.iconClass"
          >
            <i :class="svc.icon"></i>
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
        alt="Shanghai skyline"
      />
      <div>
        <span class="inline-flex items-center gap-2 rounded-full bg-primary-100 text-primary-700 px-4 py-1.5 text-sm font-medium">
          <i class="fa-solid fa-plane"></i> Heal &amp; Discover
        </span>
        <h2 class="mt-4 section-title">Your 7-Day Medical Journey</h2>
        <p class="mt-4 text-xl text-medical-600">
          Why just get treated when you can heal, explore, and be transformed? Combine expert care
          with an immersive Shanghai experience — all orchestrated end-to-end.
        </p>
        <div class="mt-6 flex flex-wrap gap-3 text-sm">
          <span class="flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full">
            <i class="fa-solid fa-hospital"></i> World-class hospitals
          </span>
          <span class="flex items-center gap-2 bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full">
            <i class="fa-solid fa-hotel"></i> 4/5-star hotels
          </span>
          <span class="flex items-center gap-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full">
            <i class="fa-solid fa-map"></i> Guided culture tours
          </span>
        </div>
        <RouterLink to="/medical-journey" class="mt-8 inline-flex btn-pill bg-primary-600 text-white px-6 py-3 text-sm">
          Explore Your Journey
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
        <h2 class="section-title text-white">Begin Your Healing Journey</h2>
        <p class="mt-4 text-xl text-white/80 max-w-lg">
          Tell us what you're looking for. Our team will reply within 24 hours with a personalized
          plan — including estimated costs, hospital options, and travel logistics.
        </p>
        <div class="mt-10 space-y-6 text-white/90">
          <div class="flex gap-4 items-start">
            <span class="w-12 h-12 grid place-items-center rounded-xl bg-white/15">
              <i class="fa-solid fa-envelope text-xl"></i>
            </span>
            <div>
              <div class="text-sm text-white/60 uppercase tracking-wider">Email</div>
              <div class="text-lg font-semibold">hello@carebridgechina.com</div>
            </div>
          </div>
          <div class="flex gap-4 items-start">
            <span class="w-12 h-12 grid place-items-center rounded-xl bg-white/15">
              <i class="fa-brands fa-whatsapp text-xl"></i>
            </span>
            <div>
              <div class="text-sm text-white/60 uppercase tracking-wider">WhatsApp</div>
              <div class="text-lg font-semibold">+86 139 0000 0000</div>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import ContactForm from '@/components/ContactForm.vue';

const services = [
  {
    title: 'Health Screening',
    desc: 'Comprehensive, same-day executive screenings with advanced imaging and international reporting.',
    icon: 'fa-solid fa-stethoscope',
    iconClass: 'bg-primary-100 text-primary-600'
  },
  {
    title: 'Dentistry',
    desc: 'Implants, veneers, and full-mouth reconstruction using leading-edge digital workflows.',
    icon: 'fa-solid fa-tooth',
    iconClass: 'bg-secondary-100 text-secondary-600'
  },
  {
    title: 'Cosmetic Surgery',
    desc: 'Natural-looking aesthetic procedures in private, JCI-aligned surgical suites.',
    icon: 'fa-solid fa-user-md',
    iconClass: 'bg-accent-100 text-accent-600'
  },
  {
    title: 'Traditional Chinese Medicine',
    desc: 'Authentic TCM — acupuncture, herbal therapy, cupping and tai chi — from licensed practitioners.',
    icon: 'fa-solid fa-yin-yang',
    iconClass: 'bg-emerald-100 text-emerald-600'
  },
  {
    title: 'CAR-T Cell Therapy',
    desc: 'Access cutting-edge immunotherapy with outcomes on par with global leaders.',
    icon: 'fa-solid fa-dna',
    iconClass: 'bg-rose-100 text-rose-600'
  },
  {
    title: 'Advanced Treatments',
    desc: 'Cardiology, orthopedics, and oncology programs at China\'s top academic medical centers.',
    icon: 'fa-solid fa-heart-pulse',
    iconClass: 'bg-indigo-100 text-indigo-600'
  }
];
</script>
