<template>
  <section class="video-section">
    <div class="container-fluid">
      <div class="row align-items-center">
        <!-- Video Column -->
        <div class="col-lg-7 col-md-7 p-0">
          <div class="video-wrapper">
            <video 
              class="section-video"
              autoplay
              muted
              loop
              playsinline
              preload="auto"
            >
              <source src="/video/section-4.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        
        <!-- Content Column -->
        <div class="col-lg-5 col-md-5">
          <div class="content-wrapper">
            <h2 class="section-title">
              {{ $t('section3.title') }} {{ $t('section3.titleHighlight') }}
            </h2>
            
            <h4 class="section-subtitle">
              {{ $t('section3.subtitle') }}
            </h4>
            
            <p class="section-description">
              {{ $t('section3.description') }}
            </p>
            
            <!-- <a href="#" class="learn-more-link">
              {{ $t('section1.learnMore') }}
              <i class="bi bi-arrow-right ms-2"></i>
            </a> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { locale } = useI18n()
</script>

<style scoped>
.video-section {
  background-color: #ffffff;
  overflow: hidden;
  height: 100vh;
}

.container-fluid {
  padding: 0;
}

.video-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.section-video {
  width: 100%;
  height: auto;
  min-height: 400px;
  object-fit: cover;
  pointer-events: none;
}

.content-wrapper {
  padding: 3rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  color: #204CB5;
  margin-bottom: 2rem;
  line-height: 1.2;
}

.section-subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  color: #204CB5;
  margin-bottom: 2rem;
  line-height: 1.4;
}

.section-description {
  font-size: 1.1rem;
  color: #333333;
  line-height: 1.8;
  margin-bottom: 2.5rem;
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
  align-self: flex-start; /* Tambahkan ini */
  transition: all 0.3s ease;
  width: fit-content; /* Atau tambahkan ini sebagai alternatif */
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
  .section-video {
    min-height: 300px;
  }
  
  .content-wrapper {
    padding: 2rem;
  }
  
  .section-title {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
  
  .section-subtitle {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }
  
  .section-description {
    margin-bottom: 2rem;
  }
}

/* Mobile Responsive */
@media (max-width: 767px) {
  .section-video {
    min-height: 250px;
  }
  
  .content-wrapper {
    padding: 1.5rem;
    text-align: left;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .section-subtitle {
    font-size: 1.2rem;
  }
  
  .section-description {
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  .section-video {
    min-height: 200px;
  }
  
  .content-wrapper {
    padding: 1rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .section-subtitle {
    font-size: 1.1rem;
  }
  
  .section-description {
    font-size: 0.95rem;
  }
}
</style>