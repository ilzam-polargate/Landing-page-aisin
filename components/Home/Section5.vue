<template>
    <section class="video-section">
        <div class="container-fluid">
            <div class="row align-items-center">
                <!-- Video Column -->
                <div class="col-xl-8 p-0">
                    <div class="video-wrapper">
                        <div class="youtube-container">
                            <!-- YouTube Thumbnail (clickable) -->
                            <div 
                                v-if="!isVideoPlaying" 
                                class="youtube-thumbnail"
                                @click="playVideo"
                            >
                                <img 
                                    :src="thumbnailUrl" 
                                    alt="YouTube Video Thumbnail"
                                    class="thumbnail-image"
                                />
                                <div class="play-button-overlay">
                                    <div class="play-button">
                                        <svg width="68" height="48" viewBox="0 0 68 48">
                                            <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path>
                                            <path d="M 45,24 27,14 27,34" fill="#fff"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <!-- YouTube Iframe (when playing) -->
                            <iframe
                                v-if="isVideoPlaying"
                                :src="videoUrl"
                                class="youtube-iframe"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; loop;"
                                allowfullscreen
                            ></iframe>
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

// YouTube video configuration
const youtubeVideoId = 'rvYT4mus6UY'
const isVideoPlaying = ref(false)

// YouTube thumbnail URL (default quality)
const thumbnailUrl = computed(() => {
    return `https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`
})

// YouTube embed URL with autoplay when clicked
const videoUrl = computed(() => {
    return `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`
})

const playVideo = () => {
    isVideoPlaying.value = true
}
</script>

<style scoped>
.video-section {
    background-color: #ffffff;
    overflow: hidden;
}

.container-fluid {
    padding: 0;
}

.video-wrapper {
    position: relative;
    background-color: #000000;
    width: 100%;
    overflow: hidden;
}

.youtube-container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
}

.youtube-thumbnail {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: opacity 0.3s ease;
}

.youtube-thumbnail:hover {
    opacity: 0.9;
}

.thumbnail-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.play-button-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: transform 0.3s ease;
}

.youtube-thumbnail:hover .play-button-overlay {
    transform: translate(-50%, -50%) scale(1.1);
}

.play-button {
    display: flex;
    align-items: center;
    justify-content: center;
}

.youtube-iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.section-title {
    font-size: 2rem;
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
    font-size: 1rem;
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
    width: fit-content;
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