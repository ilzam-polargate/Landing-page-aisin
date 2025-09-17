<template>
  <section class="anniversary-section">
    <div class="container">
      <!-- Logo Row -->
      <div class="row">
        <div class="col-md-6">
          <div class="logo-wrapper">
            <!-- Desktop Logo -->
            <img src="/main-logo.png" alt="30th Anniversary Aisin Indonesia"
              class="anniversary-logo anniversary-logo-desktop img-fluid">
            <!-- Mobile Logo -->
            <img src="/main-logo.png" alt="30th Anniversary Aisin Indonesia"
              class="anniversary-logo anniversary-logo-mobile img-fluid">
          </div>
        </div>
        <div class="col-md-6 my-auto ps-md-5">
          <div class="content-wrapper">
            <div class="japanese-section">
              <p class="japanese-text mb-3 fw-semibold">{{ $t('section1.logoMeaning') }}</p>
              <a href="#" class="learn-more-link" @click.prevent="showPopup = true">
                {{ $t('section1.learnMore') }}
                <i class="bi bi-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Popup Modal -->
    <div v-if="showPopup" class="popup-overlay" @click="closePopup">
      <div class="popup-container">
        <!-- Close Button -->
        <button class="popup-close" @click="closePopup">
          <i class="bi bi-x"></i>
        </button>

        <!-- Popup Image -->
        <img :src="getPopupImage()" :alt="`Popup ${$i18n.locale.value}`" class="popup-image" @click.stop>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const showPopup = ref(false)

const getPopupImage = () => {
  return `/img/popup/${locale.value}.png`
}

const closePopup = () => {
  showPopup.value = false
}

// Close popup when pressing Escape key
onMounted(() => {
  const handleEscape = (e) => {
    if (e.key === 'Escape' && showPopup.value) {
      closePopup()
    }
  }

  document.addEventListener('keydown', handleEscape)

  onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape)
  })
})
</script>

<style scoped>
.anniversary-section {
  padding: 5rem 0;
  background-color: #ffffff;
}

.logo-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
}

.anniversary-logo {
  width: 80%;
  height: auto;
}

/* Hide mobile logo by default */
.anniversary-logo-mobile {
  display: none;
}

.content-wrapper {
  display: flex;
  /* justify-content: flex-end; */
  padding-right: 2rem;
}

.japanese-section {
  text-align: start;
}

.japanese-text {
  font-size: 1.1rem;
  color: #333333;
  font-weight: 400;
}

.learn-more-link {
  color: #204CB5;
  font-size: 1.1rem;
  border-bottom: 2px solid #204CB5;
  padding-bottom: 5px;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.learn-more-link:hover {
  color: #2c5f8a;
  border-bottom-color: #2c5f8a;
  text-decoration: none !important;
}

.learn-more-link:hover i {
  transform: translateX(5px);
}

.learn-more-link i {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

/* Popup Styles */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: fadeIn 0.3s ease;
}

.popup-container {
  position: relative;
  max-width: 60%;
  max-height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  animation: scaleIn 0.3s ease;
  position: relative;
}

.popup-close {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.9);
  border: 2px solid #ddd;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10001;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.popup-close:hover {
  background-color: #f5f5f5;
  border-color: #bbb;
  transform: scale(1.1);
}

.popup-close i {
  font-size: 1.5rem;
  color: #333;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

@media (max-width: 1024px) {
  .popup-container {
    position: relative;
    max-width: 100%;
    max-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

/* Tablet Responsive */
@media (max-width: 991px) {
  .anniversary-section {
    padding: 4rem 0;
  }

  .content-wrapper {
    padding-right: 1.5rem;
  }
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .anniversary-section {
    padding: 3rem 0;
  }

  /* Hide desktop logo, show mobile logo */
  .anniversary-logo-desktop {
    display: none;
  }

  .anniversary-logo-mobile {
    display: block;
  }

  .content-wrapper {
    justify-content: center;
    padding-right: 0;
  }

  .japanese-section {
    text-align: center;
  }

  .japanese-text {
    font-size: 1rem;
  }

  .popup-close {
    top: 8px;
    right: 8px;
    width: 35px;
    height: 35px;
  }

  .popup-close i {
    font-size: 1.3rem;
  }
}

@media (max-width: 576px) {
  .anniversary-section {
    padding: 2.5rem 0;
  }

  .anniversary-logo {
    max-width: 280px;
  }

  .logo-wrapper {
    margin-bottom: 2rem;
  }

  .learn-more-link {
    font-size: 0.9rem;
  }

  .popup-close {
    top: 5px;
    right: 5px;
    width: 32px;
    height: 32px;
  }

  .popup-close i {
    font-size: 1.2rem;
  }
}
</style>