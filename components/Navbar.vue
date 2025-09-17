<template>
  <nav class="navbar navbar-light bg-white shadow-sm py-2 fixed-top">
    <div class="container-fluid px-lg-5">
      <!-- Logo Kiri - AISIN -->
      <div>
        <a class="navbar-brand me-0" href="#">
          <img src="/logo-aisin.webp" alt="PT. AISIN Indonesia" height="60" class="d-inline-block align-text-top me-2">
        </a>
        <a class="navbar-brand me-0" href="#">
          <img src="/logo-horizontal.png" alt="30 Years Anniversary" height="60" class="d-inline-block align-text-top">
        </a>

      </div>


      <!-- Logo Kanan dan Language Selector -->
      <div class="d-flex align-items-center gap-3">
        <!-- Language Dropdown -->
        <div class="dropdown ps-0 ps-md-4">
          <button class="btn btn-outline-secondary dropdown-toggle d-flex align-items-center gap-2" type="button"
            id="languageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-globe"></i>
            <span>{{ currentLocaleName }}</span>
          </button>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="languageDropdown">
            <li v-for="locale in availableLocales" :key="locale.code">
              <NuxtLink :to="switchLocalePath(locale.code)" class="dropdown-item d-flex align-items-center gap-2"
                :class="{ 'active': locale.code === $i18n.locale }">
                <span v-if="locale.code === 'jp'">🇯🇵</span>
                <span v-else-if="locale.code === 'en'">🇺🇸</span>
                <span v-else-if="locale.code === 'id'">🇮🇩</span>
                {{ locale.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})

const currentLocaleName = computed(() => {
  return locales.value.find(i => i.code === locale.value)?.name
})
</script>

<style scoped>
.navbar-brand img {
  transition: transform 0.2s ease;
}

.navbar-brand:hover img {
  transform: scale(1.05);
}

.dropdown-toggle {
  border: 1px solid #dee2e6;
  font-size: 0.9rem;
  padding: 0.375rem 0.75rem;
}

.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.dropdown-item.active {
  background-color: #e7f1ff;
  color: #0056b3;
}

.dropdown-item:hover {
  background-color: #f8f9fa;
}

/* Responsive adjustments */
@media (max-width: 576px) {
  .container-fluid {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .navbar-brand img {
    height: 40px;
  }

  .d-flex.gap-4 {
    gap: 0.5rem !important;
  }

  .dropdown-toggle span {
    display: none;
  }
}
</style>