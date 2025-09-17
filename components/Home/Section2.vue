<template>
  <section class="ebook-section">
    <div class="container">
      <div class="row justify-content-end">
        <!-- Content Overlay Card -->
        <div class="col-12">
          <div class="content-card">
            <div class="row align-items-center">
              <!-- Book Image Column -->
              <div class="col-lg-5 col-md-6 mb-4 mb-md-0">
                <div class="book-wrapper">
                  <img 
                    :src="bookImageSrc" 
                    alt="Company Ebook" 
                    class="book-image"
                    :key="locale"
                  >
                </div>
              </div>
              
              <!-- Content Column -->
              <div class="col-lg-7 col-md-6">
                <div class="content-wrapper">
                  <h3 class="content-title"> {{ $t('section2.titleHighlight') }} </h3>
                  <p class="japanese-text mb-3">
                    {{ $t('section2.text1') }}
                  </p>
                  <p class="japanese-text mb-3">
                    {{ $t('section2.text2') }}
                  </p>
                  <!-- <p class="japanese-text mb-4">
                    {{ $t('section2.text3') }}
                  </p> -->
                  
                  <NuxtLink 
                    :to="ebookUrl" 
                    target="_blank"
                    class="learn-more-link"
                  >
                    {{ $t('section1.learnMore') }}
                    <i class="bi bi-arrow-right ms-2"></i>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { locale } = useI18n()

// Force reactive book image source
const bookImageSrc = computed(() => {
  // Menambahkan timestamp atau query parameter untuk force refresh
  return `/img/book.svg?v=${Date.now()}`
  // Atau bisa juga dengan cara yang lebih sederhana:
  // return `/img/book.svg?locale=${locale.value}`
})

const ebookUrl = computed(() => {
  return `https://e-book-coral.vercel.app/${locale.value}`
})
</script>

<style scoped>
.ebook-section {
  height: 100vh;
  background-image: url('/img/bg-section-2.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
}

/* Background overlay */
.ebook-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.container {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 100%;
  padding-right: 0;
}

/* Content Card - Main overlay - Now aligned to right */
.content-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 3rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  margin-left: auto;
  margin-right: 0;
  max-width: 1000px;
  float: right;
}

.content-title {
  font-size: 2rem;
  font-weight: 700;
  color: #204CB5;
  margin-bottom: 1.5rem;
}

.book-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.book-image {
  width: 80%;
  max-width: 300px;
  height: auto;
  transform: perspective(1000px) rotateY(-10deg);
  transition: transform 0.7s ease;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2));
}

.book-image:hover {
  transform: perspective(1000px) rotateY(0deg);
}

.content-wrapper {
  padding-left: 1rem;
}

.japanese-text {
  font-size: 1.1rem;
  color: #333333;
  line-height: 1.8;
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

/* Tablet Responsive */
@media (max-width: 991px) {
  /* .ebook-section {
    height: auto;
    min-height: 100vh;
    background-attachment: scroll;
  } */
  
  .container {
    padding-right: 15px;
  }
  
  .content-card {
    padding: 2.5rem;
    margin-right: 15px;
  }
  
  .content-title {
    font-size: 1.8rem;
  }
  
  .content-wrapper {
    padding-left: 0;
    margin-top: 1rem;
  }
}

/* Mobile Responsive */
@media (max-width: 767px) {
  /* .ebook-section {
    height: auto;
    min-height: 100vh;
    background-attachment: scroll;
  } */
  
  .container {
    padding-right: 15px;
    padding-left: 15px;
  }
  
  .content-card {
    padding: 2rem 1.5rem;
    margin-right: auto;
    margin-left: auto;
    float: none;
  }
  
  .content-title {
    font-size: 1.5rem;
    text-align: center;
  }
  
  .book-wrapper {
    margin-bottom: 1.5rem;
  }
  
  .book-image {
    width: 60%;
    max-width: 200px;
  }
  
  .content-wrapper {
    text-align: center;
    padding-left: 0;
    margin-top: 0;
  }
  
  .japanese-text {
    font-size: 1rem;
    margin-bottom: 1rem !important;
  }
  
  .learn-more-link {
    justify-content: center;
  }
}

@media (max-width: 576px) {
  .ebook-section {
    height: auto;
    min-height: 100vh;
    /* background-attachment: scroll; */
  }
  .content-card {
    padding: 1.5rem 1rem;
  }
  
  .content-title {
    font-size: 1.3rem;
  }
  
  .japanese-text {
    font-size: 0.95rem;
  }
  
  .japanese-text:last-of-type {
    margin-bottom: 1.5rem !important;
  }
}
</style>