<template>
  <!-- HERO -->
  <section class="bg-gradient-to-br from-primary-50 via-white to-secondary-50">
    <div class="container-page grid lg:grid-cols-2 gap-12 items-center pt-16 pb-24">
      <div>
        <span class="inline-flex items-center gap-2 rounded-full bg-primary-100 text-primary-700 px-4 py-2 text-sm font-medium">
          <i class="fa-solid fa-globe"></i> Asia's Medical Hub
        </span>
        <h1 class="mt-5 font-serif text-5xl md:text-6xl font-bold leading-tight text-medical-900">
          Why Choose <span class="gradient-text">China?</span>
        </h1>
        <p class="mt-5 text-xl text-medical-600 max-w-xl">
          China has quietly become a global leader in medical technology, research, and patient value —
          welcoming hundreds of thousands of international patients each year.
        </p>
        <div class="mt-8 flex flex-wrap gap-4">
          <RouterLink to="/#contact" class="btn-primary">Start Your Journey</RouterLink>
          <RouterLink to="/about" class="btn-outline">Learn More</RouterLink>
        </div>
      </div>
      <div class="relative">
        <img
          class="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
          src="https://images.unsplash.com/photo-1537531383496-f4749b8032cf?auto=format&fit=crop&w=1200&q=80"
          alt="Shanghai cityscape"
        />
        <div class="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 w-56">
          <div class="text-3xl font-bold text-primary-600">100+</div>
          <div class="text-sm text-medical-500 mt-1">JCI-Accredited Hospitals</div>
        </div>
      </div>
    </div>
  </section>

  <!-- FOUR PILLARS -->
  <section class="bg-white">
    <div class="container-page section">
      <div class="max-w-3xl">
        <h2 class="section-title">Four Compelling Reasons</h2>
        <p class="section-sub">Why patients from around the world choose China for their medical care.</p>
      </div>
      <div class="mt-14 grid md:grid-cols-2 gap-6">
        <!-- Card 1 -->
        <article class="rounded-3xl p-8 text-white bg-gradient-to-br from-teal-500 to-teal-600">
          <div class="w-14 h-14 rounded-2xl bg-white/20 grid place-items-center text-2xl mb-5">
            <i class="fa-solid fa-dollar-sign"></i>
          </div>
          <h3 class="font-sans text-2xl font-bold">Exceptional Value</h3>
          <p class="mt-3 text-white/90">
            Save 60–90% on world-class medical procedures while receiving care that rivals the best clinics in the West.
          </p>
          <div class="mt-6 space-y-3">
            <div class="flex items-center justify-between bg-white/15 rounded-xl px-4 py-3">
              <span class="font-medium">Heart Checkup</span>
              <span><strong>$75</strong> <span class="text-white/70 text-sm">vs $10k-20k US</span></span>
            </div>
            <div class="flex items-center justify-between bg-white/15 rounded-xl px-4 py-3">
              <span class="font-medium">Dental Implants</span>
              <span><strong>$890</strong> <span class="text-white/70 text-sm">vs $4.5k US</span></span>
            </div>
            <div class="flex items-center justify-between bg-white/15 rounded-xl px-4 py-3">
              <span class="font-medium">MRI Scan</span>
              <span><strong>$150</strong> <span class="text-white/70 text-sm">vs $1.5-3k US</span></span>
            </div>
          </div>
        </article>

        <!-- Card 2 -->
        <article class="rounded-3xl p-8 text-white bg-gradient-to-br from-emerald-500 to-emerald-600">
          <div class="w-14 h-14 rounded-2xl bg-white/20 grid place-items-center text-2xl mb-5">
            <i class="fa-solid fa-clock"></i>
          </div>
          <h3 class="font-sans text-2xl font-bold">Immediate Access</h3>
          <ul class="mt-5 space-y-3 text-white/90">
            <li class="flex items-start gap-3"><i class="fa-solid fa-check-circle mt-1"></i><span>Same-day specialist consultations</span></li>
            <li class="flex items-start gap-3"><i class="fa-solid fa-check-circle mt-1"></i><span>Instant advanced imaging</span></li>
            <li class="flex items-start gap-3"><i class="fa-solid fa-check-circle mt-1"></i><span>24-hour pathology &amp; lab results</span></li>
            <li class="flex items-start gap-3"><i class="fa-solid fa-check-circle mt-1"></i><span>Flexible, concierge-level scheduling</span></li>
          </ul>
        </article>

        <!-- Card 3 -->
        <article class="rounded-3xl p-8 text-white bg-gradient-to-br from-cyan-500 to-cyan-600">
          <div class="w-14 h-14 rounded-2xl bg-white/20 grid place-items-center text-2xl mb-5">
            <i class="fa-solid fa-microscope"></i>
          </div>
          <h3 class="font-sans text-2xl font-bold">Medical Innovation Leader</h3>
          <div class="mt-5 grid grid-cols-2 gap-4">
            <div class="bg-white/15 rounded-xl p-4"><div class="text-2xl font-bold">337+</div><div class="text-sm text-white/80">CAR-T Trials</div></div>
            <div class="bg-white/15 rounded-xl p-4"><div class="text-2xl font-bold">80%</div><div class="text-sm text-white/80">Remission</div></div>
            <div class="bg-white/15 rounded-xl p-4"><div class="text-2xl font-bold">100+</div><div class="text-sm text-white/80">JCI Hospitals</div></div>
            <div class="bg-white/15 rounded-xl p-4"><div class="text-2xl font-bold">Top 3</div><div class="text-sm text-white/80">Research Output</div></div>
          </div>
        </article>

        <!-- Card 4 -->
        <article class="rounded-3xl p-8 text-white bg-gradient-to-br from-violet-500 to-violet-600">
          <div class="w-14 h-14 rounded-2xl bg-white/20 grid place-items-center text-2xl mb-5">
            <i class="fa-solid fa-hospital"></i>
          </div>
          <h3 class="font-sans text-2xl font-bold">World-Class Facilities</h3>
          <ul class="mt-5 space-y-3 text-white/90">
            <li class="flex items-start gap-3"><i class="fa-solid fa-certificate mt-1"></i><span>JCI-accredited hospitals</span></li>
            <li class="flex items-start gap-3"><i class="fa-solid fa-robot mt-1"></i><span>Robotic and minimally invasive surgery</span></li>
            <li class="flex items-start gap-3"><i class="fa-solid fa-brain mt-1"></i><span>AI-assisted diagnostics</span></li>
            <li class="flex items-start gap-3"><i class="fa-solid fa-user-md mt-1"></i><span>International-trained physicians</span></li>
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
        <h2 class="section-title">Shanghai: Your Medical Destination</h2>
        <div class="mt-5 space-y-4 text-lg text-medical-600">
          <p>Shanghai is China's most cosmopolitan city and the country's undisputed medical hub — home to the best hospitals, the newest therapies, and the most experienced international patient programs.</p>
          <p>Access pioneering treatments like CAR-T cell therapy, robotic surgery, and AI-assisted diagnostics, backed by rigorous quality standards.</p>
          <p>It's also safe, modern, and effortless to get around — with world-class hotels, English-friendly services, and direct flights to nearly every major city.</p>
        </div>
        <div class="mt-6 flex flex-wrap gap-3 text-sm">
          <span class="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full">
            <i class="fa-solid fa-shield-halved"></i> Safe &amp; Modern
          </span>
          <span class="inline-flex items-center gap-2 bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full">
            <i class="fa-solid fa-subway"></i> Efficient Transport
          </span>
          <span class="inline-flex items-center gap-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full">
            <i class="fa-solid fa-globe"></i> International-Friendly
          </span>
        </div>
      </div>
    </div>
  </section>

  <!-- CULTURAL EXPERIENCE -->
  <section class="bg-white">
    <div class="container-page section">
      <div class="max-w-3xl">
        <h2 class="section-title">Turn Healing Into Adventure</h2>
        <p class="section-sub">
          Combine world-class healthcare with rich cultural exploration — a journey that restores both body and spirit.
        </p>
      </div>
      <div class="mt-14 grid md:grid-cols-3 gap-6">
        <article class="rounded-3xl p-8 bg-amber-50 border border-amber-100">
          <div class="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 grid place-items-center text-2xl mb-5">
            <i class="fa-solid fa-landmark"></i>
          </div>
          <h3 class="font-sans text-xl font-bold text-medical-900">Ancient Heritage</h3>
          <p class="mt-3 text-medical-600">
            Walk the Great Wall, wander imperial palaces, and step into temples that have witnessed five millennia of history.
          </p>
        </article>
        <article class="rounded-3xl p-8 bg-rose-50 border border-rose-100">
          <div class="w-14 h-14 rounded-2xl bg-rose-100 text-rose-600 grid place-items-center text-2xl mb-5">
            <i class="fa-solid fa-utensils"></i>
          </div>
          <h3 class="font-sans text-xl font-bold text-medical-900">World-Famous Cuisine</h3>
          <p class="mt-3 text-medical-600">
            From soup dumplings in back-alley shops to refined Peking duck in Michelin dining rooms, discover a living culinary tradition.
          </p>
        </article>
        <article class="rounded-3xl p-8 bg-purple-50 border border-purple-100">
          <div class="w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 grid place-items-center text-2xl mb-5">
            <i class="fa-solid fa-city"></i>
          </div>
          <h3 class="font-sans text-xl font-bold text-medical-900">Modern Innovation</h3>
          <p class="mt-3 text-medical-600">
            Neon skylines, high-speed rail, and a thriving tech culture that sits side by side with centuries of tradition.
          </p>
        </article>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="bg-gradient-to-br from-primary-900 via-secondary-900 to-accent-900 text-white">
    <div class="container-page section text-center">
      <h2 class="section-title text-white">Begin Your Journey to China</h2>
      <p class="mt-4 text-xl text-white/80 max-w-2xl mx-auto">
        Experience world-class healthcare combined with unforgettable cultural discovery.
      </p>
      <div class="mt-8 flex flex-wrap gap-4 justify-center">
        <RouterLink to="/#contact" class="btn-inverse">Get Free Consultation</RouterLink>
        <RouterLink to="/explore-china" class="btn-inverse-outline">Explore China</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
