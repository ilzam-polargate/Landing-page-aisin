<template>
  <section class="hero-section position-relative">
    <!-- Background Video -->
    <div class="hero-background">
      <video 
        class="hero-video"
        autoplay 
        muted 
        loop 
        playsinline
      >
        <source src="/video/hero.mp4" type="video/mp4">
        <!-- Fallback untuk browser yang tidak support video -->
        Your browser does not support the video tag.
      </video>
    </div>
    
    <!-- Content -->
    <div class="container-fluid h-100 position-relative">
      <div class="row h-100">
        <!-- Center Title -->
        <!-- <div class="col-12 d-flex align-items-center justify-content-center">
          <h1 class="hero-title text-white text-center">
            {{ $t('hero.title') }}
          </h1>
        </div> -->
        
        <!-- Bottom Right Text (Desktop) / Center Bottom (Mobile) -->
        <!-- <div class="hero-description-wrapper">
          <div class="hero-description text-white">
            <p class="mb-0 description-text">
              {{ $t('hero.description') }}
            </p>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  height: 100vh;
  overflow: hidden;
  position: relative;
  padding-top: 80px; /* Space for fixed navbar */
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.container-fluid {
  z-index: 2;
}

.hero-title {
  font-size: 4rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 2;
}

.hero-description-wrapper {
  position: absolute;
  bottom: 5rem;
  right: 10rem;
  left: auto;
  z-index: 3;
}

.hero-description {
  max-width: 400px;
  font-size: 1rem;
  line-height: 1.5;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  margin-left: auto;
}

.description-text {
  text-align: right;
}

@media screen and (max-width: 1200px) {
  .hero-description-wrapper {
    right: 5rem;
  }
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .hero-section {
    height: 80vh;
    padding-top: 60px; /* Smaller padding for mobile navbar */
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-description-wrapper {
    bottom: 3rem;
    left: 0;
    right: 0;
    transform: none;
    display: flex;
    justify-content: center;
  }
  
  .hero-description {
    max-width: 300px;
    font-size: 0.9rem;
    text-align: center;
    margin-left: 0;
    margin-right: 0;
  }
  
  .description-text {
    text-align: center !important;
  }
}

@media (max-width: 576px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-description-wrapper {
    bottom: 2.5rem;
  }
  
  .hero-description {
    max-width: 250px;
    font-size: 0.8rem;
    text-align: center;
    margin-left: 0;
    margin-right: 0;
    padding: 0 1rem;
  }
  
  .description-text {
    text-align: center !important;
  }
}
</style>