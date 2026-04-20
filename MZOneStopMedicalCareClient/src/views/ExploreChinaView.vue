<template>
  <!-- HERO -->
  <section class="bg-gradient-to-br from-primary-50 via-white to-secondary-50">
    <div class="container-page text-center pt-16 pb-24">
      <span class="inline-flex items-center gap-2 rounded-full bg-primary-100 text-primary-700 px-4 py-2 text-sm font-medium">
        <i class="fa-solid fa-map-location-dot"></i> Discover the Extraordinary
      </span>
      <h1 class="mt-5 font-serif text-5xl md:text-6xl font-bold leading-tight text-medical-900">
        Explore <span class="gradient-text">China</span>
      </h1>
      <p class="mt-5 text-xl text-medical-600 max-w-3xl mx-auto">
        Turn your medical journey into an unforgettable adventure. From Shanghai's futuristic skyline
        to ancient wonders and UNESCO heritage sites, this is travel that transforms.
      </p>
    </div>
  </section>

  <!-- SHANGHAI HIGHLIGHTS -->
  <section class="bg-white">
    <div class="container-page section">
      <div class="max-w-3xl">
        <h2 class="section-title">Shanghai Highlights</h2>
        <p class="section-sub">
          China's most cosmopolitan city — where ancient tradition meets futuristic innovation.
        </p>
      </div>
      <div class="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <figure
          v-for="card in highlights"
          :key="card.title"
          class="relative overflow-hidden rounded-3xl h-80 group"
        >
          <img
            :src="card.img"
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
        <h2 class="section-title">Cultural Immersion Experiences</h2>
        <p class="section-sub">Authentic encounters with China's living heritage.</p>
      </div>
      <div class="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="item in experiences"
          :key="item.title"
          class="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition"
        >
          <img :src="item.img" :alt="item.title" class="w-full h-56 object-cover" />
          <div class="p-6">
            <span
              class="inline-block text-xs font-medium rounded-full px-3 py-1"
              :class="item.included ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'"
            >
              {{ item.included ? 'Included in Premium' : 'Optional Add-on' }}
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
        <h2 class="section-title">Beyond Shanghai</h2>
        <p class="section-sub">Extend your journey to explore more of China's wonders.</p>
      </div>
      <div class="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <article
          v-for="dest in destinations"
          :key="dest.title"
          class="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition"
        >
          <div class="relative overflow-hidden h-56">
            <img :src="dest.img" :alt="dest.title" class="w-full h-full object-cover hover:scale-110 transition duration-500" />
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
              <span class="text-primary-600 font-semibold">From {{ dest.price }}</span>
            </div>
          </div>
        </article>
      </div>

      <div class="mt-12 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-3xl p-8 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
        <div>
          <h3 class="font-serif text-2xl font-bold">Want to Extend Your Stay?</h3>
          <p class="mt-2 text-white/80 max-w-2xl">
            Many patients add 2–3 extra days to see more of China after their treatment — we'll build it into your itinerary.
          </p>
        </div>
        <RouterLink to="/#contact" class="btn-pill bg-white text-primary-600 px-6 py-3 font-semibold">
          Ask About Extensions
        </RouterLink>
      </div>
    </div>
  </section>

  <!-- TRAVEL & STAY -->
  <section class="bg-gradient-to-br from-blue-50 via-white to-indigo-50">
    <div class="container-page section">
      <div class="max-w-3xl">
        <h2 class="section-title">Travel &amp; Stay</h2>
        <p class="section-sub">
          Rest and recover in comfort — handpicked accommodations near top medical facilities.
        </p>
      </div>

      <div class="mt-14 grid lg:grid-cols-2 gap-8">
        <article
          v-for="hotel in hotels"
          :key="hotel.title"
          class="bg-white rounded-3xl overflow-hidden shadow-lg"
        >
          <img :src="hotel.img" :alt="hotel.title" class="w-full h-64 object-cover" />
          <div class="p-8">
            <header class="flex items-start justify-between gap-3">
              <h3 class="font-serif text-2xl font-bold text-medical-900">{{ hotel.title }}</h3>
              <span class="text-xs font-medium rounded-full px-3 py-1" :class="hotel.badgeClass">
                {{ hotel.badge }}
              </span>
            </header>
            <p class="mt-3 text-medical-600">{{ hotel.desc }}</p>
            <ul class="mt-5 space-y-2 text-medical-700">
              <li v-for="amenity in hotel.amenities" :key="amenity" class="flex items-start gap-3">
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
            <h3 class="font-serif text-2xl font-bold text-medical-900">Your Safety &amp; Comfort Come First</h3>
            <p class="mt-2 text-medical-600">
              All accommodations are carefully vetted and located within minutes of our partner hospitals.
            </p>
          </div>
        </div>
        <div class="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div><div class="font-serif text-3xl font-bold text-emerald-600">&lt;10 min</div><div class="text-sm text-medical-500 mt-1">To medical center</div></div>
          <div><div class="font-serif text-3xl font-bold text-primary-600">24/7</div><div class="text-sm text-medical-500 mt-1">Concierge support</div></div>
          <div><div class="font-serif text-3xl font-bold text-secondary-600">100%</div><div class="text-sm text-medical-500 mt-1">Non-smoking rooms</div></div>
          <div><div class="font-serif text-3xl font-bold text-accent-600">Free</div><div class="text-sm text-medical-500 mt-1">High-speed WiFi</div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="bg-gradient-to-br from-primary-900 via-secondary-900 to-accent-900 text-white">
    <div class="container-page section text-center">
      <h2 class="section-title text-white">Ready to Explore China?</h2>
      <p class="mt-4 text-xl text-white/80 max-w-2xl mx-auto">
        Combine world-class healthcare with an unforgettable China experience.
      </p>
      <div class="mt-8 flex flex-wrap gap-4 justify-center">
        <RouterLink to="/medical-journey" class="btn-inverse">View Full Journey</RouterLink>
        <RouterLink to="/#contact" class="btn-inverse-outline">Contact Us</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

const highlights = [
  { title: 'The Bund', desc: 'A historic waterfront where colonial architecture meets the futuristic Pudong skyline.', img: 'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Shanghai Tower', desc: 'Ride to the 118th-floor observation deck of a 632-meter icon for breathtaking 360° views.', img: 'https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Yu Garden', desc: '400 years of classical Chinese landscape design and the lively Yuyuan Bazaar.', img: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?auto=format&fit=crop&w=1200&q=80' },
  { title: 'French Concession', desc: 'Tree-lined avenues, boutique cafes, and elegant European villas.', img: 'https://images.unsplash.com/photo-1565521990426-613d7b8767b4?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Huangpu River Cruise', desc: 'Glide past illuminated icons of both historic Bund and modern Pudong at night.', img: 'https://images.unsplash.com/photo-1538669716095-09471c8a6c7a?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Culinary Delights', desc: 'From soup dumplings and street food to Michelin-starred dining rooms.', img: 'https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?auto=format&fit=crop&w=1200&q=80' }
];

const experiences = [
  { title: 'Traditional Tea Ceremony', desc: 'A master-led tea experience near Yu Garden.', duration: '90 min', location: 'Yu Garden area', included: true, img: 'https://images.unsplash.com/photo-1545167496-31b3d3e27358?auto=format&fit=crop&w=1200&q=80' },
  { title: 'TCM Wellness Session', desc: 'Consultation with a licensed TCM practitioner.', duration: '60 min', location: 'Partner clinic', included: true, img: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Night Market Food Tour', desc: '8+ tastings across iconic street-food alleys.', duration: '2.5 hours', location: 'Downtown Shanghai', included: true, img: 'https://images.unsplash.com/photo-1555212697-194d092e3b8f?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Authentic Cooking Class', desc: 'Shop a wet market, then cook alongside a local chef.', duration: '3 hours', location: 'Cooking studio', included: false, img: 'https://images.unsplash.com/photo-1515002246390-7bf7e8f87b54?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Calligraphy Workshop', desc: 'Hands-on brush-and-ink class with all materials included.', duration: '2 hours', location: 'Art studio', included: false, img: 'https://images.unsplash.com/photo-1538669716095-09471c8a6c7a?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Temple &amp; Meditation', desc: 'A quiet visit and guided sitting at Jade Buddha Temple.', duration: '1.5 hours', location: 'Jade Buddha Temple', included: true, img: 'https://images.unsplash.com/photo-1512813195386-6cf811ad3542?auto=format&fit=crop&w=1200&q=80' }
];

const destinations = [
  { title: 'Beijing', desc: 'The Great Wall, Forbidden City, Tiananmen, and the Summer Palace.', duration: '2–3 days', price: '$400', badge: 'MUST SEE', img: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Hangzhou', desc: 'West Lake, tea plantations, and a landscape dubbed paradise on earth.', duration: '1–2 days', price: '$250', badge: null, img: 'https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Chengdu', desc: 'Giant pandas, bold Sichuan cuisine, and timeless teahouse culture.', duration: '2 days', price: '$350', badge: null, img: 'https://images.unsplash.com/photo-1560851691-ebb648885d56?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Guilin', desc: 'A Li River cruise through dramatic karst mountains — a photographer\'s paradise.', duration: '2–3 days', price: '$400', badge: null, img: 'https://images.unsplash.com/photo-1537531383496-f4749b8032cf?auto=format&fit=crop&w=1200&q=80' }
];

const hotels = [
  {
    title: '4-Star Comfort',
    desc: 'Thoughtful comfort and reliable service — perfect for essential packages.',
    badge: 'Essential Package',
    badgeClass: 'bg-blue-100 text-blue-700',
    img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    amenities: [
      'Daily breakfast buffet',
      'Airport shuttle',
      'English-speaking staff',
      'Walking distance to metro',
      'Non-smoking rooms'
    ]
  },
  {
    title: '5-Star Luxury',
    desc: 'Signature hospitality in premium locations for our luxury journeys.',
    badge: 'Luxury Package',
    badgeClass: 'bg-amber-100 text-amber-700',
    img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
    amenities: [
      'Executive lounge access',
      'Full-service spa',
      'In-room gourmet dining',
      'Premium city-center location',
      'Welcome amenities'
    ]
  }
];
</script>
