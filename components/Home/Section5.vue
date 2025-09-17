<template>
    <section class="video-section">
        <div class="container-fluid">
            <div class="row align-items-center">
                <!-- Image Column (previously Video Column) -->
                <div class="col-xl-8 p-0">
                    <div class="image-wrapper">
                        <div class="">
                            <img 
                                src="/img/thumbnail-section-5.png" 
                                alt="Section 5 Thumbnail"
                                class="thumbnail-image"
                            />
                        </div>
                    </div>
                </div>

                <!-- Content Column -->
                <div class="col-xl-4 p-0">
                    <div class="content-wrapper py-5 py-xl-0 px-5">
                        <h2 class="section-title">
                            {{ $t('section3.title') }} {{ $t('section3.titleHighlight') }}
                        </h2>

                        <!-- <h4 class="section-subtitle">
                            {{ $t('section3.subtitle') }}
                        </h4> -->

                        <p class="section-description">
                            {{ $t('section3.description') }}
                        </p>
                        <p class="section-description">
                            {{ $t('section3.detail') }}
                        </p>
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
    /* height: 100vh; */
}

.container-fluid {
    padding: 0;
}

.image-wrapper {
    position: relative;
    background-color: #000000;
    width: 100%;
    overflow: hidden;
}

.thumbnail-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
}

.content-wrapper {
    /* padding: 0rem 3rem; */
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
    margin-bottom: 1.5rem;
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
    align-self: flex-start;
    /* Tambahkan ini */
    transition: all 0.3s ease;
    width: fit-content;
    /* Atau tambahkan ini sebagai alternatif */
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
    .video-section {
        height: auto;
    }

    .content-wrapper {
        padding: 2rem;
    }

    .section-title {
        font-size: 2rem;
        margin-bottom: 1.5rem;
    }

    .section-subtitle {
        font-size: 1.25rem;
        margin-bottom: 1.5rem;
    }

    .section-description {
        font-size: 1rem;
        margin-bottom: 2rem;
    }
}

/* Mobile Responsive */
@media (max-width: 767px) {
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