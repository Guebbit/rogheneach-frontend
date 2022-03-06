<template>
  <div id="author-who">
    <div class="heroPanel2 full-height centered with-shadow special-shadow dark-shadow white-text">
      <img
        class="background"
        :src="$config.assetUrl+'images/generic/thumbnail/mychron-floorspread-fanarts.jpg'"
        :data-src="$config.assetUrl+'images/generic/mychron-floorspread-fanarts.jpg'"
      />
      <div class="panel-content">
        <div>
          <div class="container">

            <div class="user-profile dark-shadow-highlight">
              <img
                class="user-image z-depth-4"
                :src="$config.assetUrl+'images/generic/thumbnail/mychron-avatar-face.jpg'"
                :data-src="$config.assetUrl+'images/generic/mychron-avatar-face.jpg'"
                :alt="$t('generic.author.username') + $t('generic.author.name')"
              />
              <div class="mt-40 show-on-large"></div>
              <h2 class="user-title">
                {{ $t('generic.author.name') }}
              </h2>
              <p class="user-bio flow-text">
                <span v-for="this_text in $t('generic.author.bio')">{{ this_text }}</span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
    <p class="follow-me flow-text"><span>{{ $t('generic.follow-me') }}</span></p>
    <div class="links-wrapper container">
      <a class="facebook-text"
         target="_blank"
         :href="$t('social.facebook.url')"
      >
        <i class="fab fa-facebook-f"></i>
        <span class="label">{{ $t('social.facebook.text') }}</span>
      </a>
      <a class="primary-color-text"
         target="_blank"
         :href="$t('social.website.url')"
      >
        <i class="fas fa-home"></i>
        <span class="label">{{ $t('social.website.text') }}</span>
      </a>
      <a class="patreon-button"
         :href="$t('social.patreon.url')"
         target="_blank"
      >
        <img :src="$config.assetUrl+'images/logo/logo-patreon.png'"
             :alt="$t('social.patreon.alt')"
        />
        <span class="label">{{ $t('social.patreon.text') }}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthorWho'
}
</script>
