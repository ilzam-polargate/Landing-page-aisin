<template>
  <footer class="footer-section">
    <div class="container">
      <!-- Logo Section -->
      <div class="logo-section">
        <div class="logo-wrapper">
          <img src="/logo-aisin.png" alt="Aisin Indonesia" class="aisin-logo" />
          <img src="/logo-horizontal.png" alt="30 Years Anniversary" class="anniversary-logo" />
        </div>
      </div>

      <!-- Quick Links Section -->
      <div class="quick-links-section">
        <h3 class="section-title">{{ $t('footer.quickLinksTitle') }}</h3>
        <div class="links-wrapper">
          <a :href="links.companyVideo" class="quick-link" target="_blank" rel="noopener">
            {{ $t('footer.companyVideo') }}
            <i class="bi bi-box-arrow-up-right ms-2"></i>
          </a>
          <a :href="links.companyProfile" class="quick-link" target="_blank" rel="noopener">
            {{ $t('footer.companyProfile') }}
            <i class="bi bi-box-arrow-up-right ms-2"></i>
          </a>
        </div>
      </div>

      <!-- Social Media Section -->
      <div class="social-section">
        <div class="social-icons">
          <a
            :href="social.instagram"
            class="social-link"
            target="_blank"
            rel="noopener"
            :aria-label="$t('footer.aria.instagram')"
          >
            <i class="bi bi-instagram"></i>
          </a>
          <a
            :href="social.facebook"
            class="social-link"
            target="_blank"
            rel="noopener"
            :aria-label="$t('footer.aria.facebook')"
          >
            <i class="bi bi-facebook"></i>
          </a>
        </div>
      </div>

      <!-- Copyright Section -->
      <div class="copyright-section">
        <p class="copyright-text fw-bold">
          {{ $t('footer.copyright', { year: currentYear }) }}
        </p>
      </div>
    </div>
  </footer>
</template>


<script setup>
const currentYear = new Date().getFullYear()

// Opsional: taruh URL di sini atau ambil dari runtime config/env
const links = {
  companyVideo: '#',
  companyProfile: '#'
}
const social = {
  instagram: '#',
  facebook: '#'
}
</script>

<style scoped>
.footer-section {
  background-color: #FAFAFA;
  padding: 3rem 0 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

/* Logo Section */
.logo-section {
  text-align: center;
  margin-bottom: 3rem;
}

.logo-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.aisin-logo {
  height: 60px;
  width: auto;
  object-fit: contain;
}

.anniversary-logo {
  height: 80px;
  width: auto;
  object-fit: contain;
}

/* Quick Links Section */
.quick-links-section {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #333333;
  margin-bottom: 2rem;
  letter-spacing: 1px;
}

.links-wrapper {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.quick-link {
  color: #333333;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 5px;
}

.quick-link:hover {
  color: #204CB5;
  text-decoration: none;
  background-color: rgba(32, 76, 181, 0.1);
}

.quick-link:hover i {
  transform: translate(3px, -3px);
}

.quick-link i {
  font-size: 1rem;
  transition: transform 0.3s ease;
}

/* Social Media Section */
.social-section {
  text-align: center;
  margin-bottom: 3rem;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: transparent;
  color: #333333;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  transform: translateY(-2px);
}

.social-link i {
  font-size: 1.5rem;
}

/* Copyright Section */
.copyright-section {
  text-align: center;
  padding-top: 2rem;
  /* border-top: 1px solid #dee2e6; */
}

.copyright-text {
  font-size: 1rem;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer-section {
    padding: 2rem 0 1.5rem;
  }

  .logo-wrapper {
    gap: 1.5rem;
  }

  .aisin-logo {
    height: 50px;
  }

  .anniversary-logo {
    height: 65px;
  }

  .section-title {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }

  .links-wrapper {
    gap: 2rem;
    flex-direction: column;
    align-items: center;
  }

  .quick-link {
    font-size: 1rem;
  }

  .social-icons {
    gap: 1.5rem;
  }

  .social-link {
    width: 45px;
    height: 45px;
  }

  .social-link i {
    font-size: 1.3rem;
  }

  .copyright-text {
    font-size: 0.9rem;
  }
}

@media (max-width: 576px) {
  .logo-wrapper {
    flex-direction: column;
    gap: 1rem;
  }

  .aisin-logo {
    height: 45px;
  }

  .anniversary-logo {
    height: 60px;
  }

  .section-title {
    font-size: 1.2rem;
  }

  .quick-link {
    font-size: 0.95rem;
  }

  .social-link {
    width: 40px;
    height: 40px;
  }

  .social-link i {
    font-size: 1.2rem;
  }
}
</style>