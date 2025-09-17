
<template>
    <section class="company-video-section py-5">
        <div class="container">
            <div class="row align-items-center">
                <!-- Left Content -->
                <h2 class="section-title mb-4 fw-bold">
                    {{ $t('section3.title') }} <span class="text-primary">{{ $t('section3.titleHighlight') }}</span>
                </h2>
                <div class="col-lg-4 mb-4 mb-lg-0 order-2 order-lg-1">
                    <div class="video-content">
                        <h3 class="video-subtitle mb-5 fw-bold">
                            {{ $t('section3.subtitle') }}
                        </h3>

                        <h4 class="video-description mb-4 fw-medium">
                            {{ $t('section3.description') }}
                        </h4>

                        <p class="video-detail mb-4">
                            {{ $t('section3.detail') }}
                        </p>

                        <a href="#"
                            class="learn-more-btn d-inline-flex align-items-center text-decoration-none fw-medium">
                            {{ $t('section1.learnMore') }}
                            <i class="bi bi-arrow-right ms-2"></i>
                        </a>
                    </div>
                </div>

                <!-- Right Video -->
                <div class="col-lg-7 order-1 order-lg-2 mb-4 mx-auto">
                    <div class="video-wrapper">
                        <div class="ratio ratio-16x9">
                            <iframe src="https://www.youtube.com/embed/LyorMhAGkxE?si=BV3Va4lQTnksl1XE"
                                title="Company Video" allowfullscreen class="rounded-3"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
// Props atau reactive data bisa ditambahkan di sini jika diperlukan
</script>

<style scoped>
.company-video-section {
    background-color: #f8f9fa;
}
.section-title {
    font-size: 2.5rem;
    color: #000000;
}

.section-title .text-primary {
    color: #204CB5 !important;
}

.video-subtitle {
    font-size: 1.5rem;
    color: #000000;
    line-height: 1.4;
}

.video-description {
    font-size: 1.25rem;
    color: #000000;
    line-height: 1.4;
}

.video-detail {
    font-size: 1rem;
    color: #000000;
    line-height: 1.6;
    margin-bottom: 2rem;
}

.learn-more-btn {
    color: #204CB5;
    font-size: 1.1rem;
    border-bottom: 2px solid #204CB5;
    padding-bottom: 5px;
    transition: all 0.3s ease;
}

.learn-more-btn:hover {
    color: #2c5f8a;
    border-bottom-color: #2c5f8a;
    text-decoration: none !important;
}

.learn-more-btn:hover i {
    transform: translateX(5px);
}

.learn-more-btn i {
    transition: transform 0.3s ease;
}

.video-wrapper {
    position: relative;
}

.video-wrapper .ratio {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.video-wrapper iframe {
    border: none;
}

/* Responsive adjustments */
@media (max-width: 991.98px) {
    .video-content {
        text-align: center;
        margin-bottom: 2rem;
    }
    .section-title{
        text-align: center;
    }
}

@media (max-width: 768px) {
    .section-title {
        font-size: 2rem;
    }

    .video-subtitle {
        font-size: 1.3rem;
    }

    .video-description {
        font-size: 1.1rem;
    }

    .company-video-section {
        padding: 3rem 0 !important;
    }

    .section-title {
        margin-bottom: 1.5rem !important;
    }

    .video-subtitle {
        margin-bottom: 1.5rem !important;
    }

    .video-description {
        margin-bottom: 1.5rem !important;
    }
}
</style>