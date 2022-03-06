<template>
  <div id="rogheneach-story" class="heroPanel2 centered with-shadow dark-shadow white-text black">
    <img class="background"
         :src="$config.assetUrl+'images/generic/thumbnail/wallpaper-rogh-characters.png'"
         :data-src="$config.assetUrl+'images/generic/wallpaper-rogh-characters.png'"
    />
    <div class="panel-content">
      <div>
        <div class="container">

          <div class="story-card dark-shadow-highlight">
            <h2 class="card-title underline-custom">
              <span>{{ $t('storyDescription.title') }}</span>
            </h2>
            <h4 class="card-tags">
              <span v-for="this_text in $t('storyDescription.tags')">{{ this_text }}</span>
            </h4>
            <div class="card-description">
              <span v-for="this_text in $t('storyDescription.description')">{{ this_text }}</span>
            </div>
            <div class="card-prizes">
              <a v-for="this_text in $t('storyDescription.prizes')"
                 :href="this_text[0]" target="_blank"
              >
                <i class="fas fa-award"></i>
                <b>{{ this_text[1] }}</b>
                <small>{{ this_text[2] }}</small>
              </a>
            </div>
          </div>

          <div class="links-wrapper mt-40">
            <a class="facebook-text"
               :href="$t('storyDescription.links.facebook.url')"
               target="_blank"
               :aria-label="$t('storyDescription.links.facebook.alt')"
            >
              <i class="fab fa-facebook-square" aria-hidden="true"></i>
            </a>
            <a :href="$t('storyDescription.links.tapastic.url')" target="_blank"
               :alt="$t('storyDescription.links.tapastic.alt')"
            >
              <img :src="$config.assetUrl+'images/logo/logo-tapastic.png'">
            </a>
            <a :href="$t('storyDescription.links.webtoon.url')" target="_blank"
               :alt="$t('storyDescription.links.tapastic.alt')"
            >
              <img :src="$config.assetUrl+'images/logo/logo-webtoon.png'">
            </a>
          </div>
          <!--
          <div class="center-align mt-60">
            <a href="#" class="btn-large btn-primary">
              {{ $t('storyDescription.continue') }} <i class="fas fa-long-arrow-alt-right"></i>
            </a>
          </div>
          -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StoryDescription',
}
</script>
